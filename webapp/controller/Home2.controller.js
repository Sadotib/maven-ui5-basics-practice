sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ui5basicspractice/project1/controller/BaseController",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/BindingMode",
    "ui5basicspractice/project1/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

], (Controller, BaseController, MessageBox, JSONModel, MessageToast, BindingMode, formatter, Filter, FilterOperator) => {
    "use strict";

    return BaseController.extend("ui5basicspractice.project1.controller.Home", {

        onInit: function () {
            this.getOwnerComponent().getModel("testManifestCarModel");

            this.getView().bindElement({
                path: "/selectedCar",
                model: "testManifestCarModel"
            });
        },

        onNavHome: function () {
            this.onNavigate("RouteHome");
        },

        onAfterRendering: function () {
            console.log("rendered");
        },

        onCarSelect: function (oEvent) {

            var oSelectedItem = oEvent.getParameter("listItem");
            var oContext = oSelectedItem.getBindingContext("testManifestCarModel");     //


            var oObjectPage = this.byId("carDetailPage");           // binding the objectpagelayout to the selected car
            if (oObjectPage && oContext) {
                oObjectPage.bindElement({
                    path: oContext.getPath(),
                    model: "testManifestCarModel"
                });

                MessageToast.show("Selected " + oContext.getProperty("car"));

            }
        },

        onCreate: function () {
            let oModel = this.getView().getModel();
            let oTestModel = this.getView().getModel("testODataModel");
            let nID = oTestModel.getProperty("/ID");
            let sName = oTestModel.getProperty("/Name");
            let sDesc = oTestModel.getProperty("/Description");

            const oPayload = {
                ID: nID,
                Name: sName,
                Description: sDesc,
                ReleaseDate: new Date(),
                Rating: 5,
                Price: "1000"
            }

            oModel.create("/Products", oPayload, {
                success: () => {
                    MessageToast.show("Successfully Created");
                    oModel.refresh(true);
                },
                error: () => {
                    MessageToast.show("Error Creating");
                }
            })
        },
        onDelete: function () {
            let oModel = this.getView().getModel();
            let oTestModel = this.getView().getModel("testODataModel");
            let nID = oTestModel.getProperty("/ID");

            if (!nID) {
                MessageToast.show("Select an Item");
                return;
            }

            var sPath = "/Products(" + nID + ")";
            oModel.setUseBatch(false);
            oModel.remove(sPath, {
                success: () => {
                    MessageToast.show("Successfully Deleted");
                    oModel.refresh(true);
                },
                error: () => {
                    MessageToast.show("Error Deleting");
                }
            })
        },
        onSelect: function (oEvent) {
            const oSelectedEntity = oEvent.getSource().getSelectedItem();
            if (!oSelectedEntity) {
                return;
            }

            const oCtx = oSelectedEntity.getBindingContext();
            const oData = oCtx.getObject();

            this.getView().getModel("testODataModel").setData({
                ID: oData.ID,
                Name: oData.Name,
                Description: oData.Description,
                ReleaseDate: oData.ReleaseDate,
                Rating: oData.Rating,
                Price: oData.Price
            })
        },

        onUpdate: function () {
            
            let oModel = this.getView().getModel();
            let oTestModel = this.getView().getModel("testODataModel");
            let nID = oTestModel.getProperty("/ID");

            if (!nID) {
                MessageToast.show("Select an Item");
                return;
            }

            let oUpdatedData = {
                Name: oTestModel.getProperty("/Name"),
                Description: oTestModel.getProperty("/Description"),
                ReleaseDate: oTestModel.getProperty("/ReleaseDate"),
                Rating: oTestModel.getProperty("/Rating"),
                Price: oTestModel.getProperty("/Price")
            }

            var sPath = "/Products(" + nID + ")";

            oModel.setUseBatch(false);
            oModel.update(sPath, oUpdatedData,{
                success: () => {
                    MessageToast.show("Successfully Updated");
                    oModel.refresh(true);
                },
                error: () => {
                    MessageToast.show("Error Updating");
                }
            })
        }
    });
});