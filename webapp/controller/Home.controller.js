sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/BindingMode"
], (Controller, MessageBox, JSONModel, MessageToast, BindingMode) => {
    "use strict";

    return Controller.extend("ui5basicspractice.project1.controller.Home", {
        // onInit() {
        //     let oCarModel = this.getOwnerComponent().getModel("manifestCarModel");

        //     // this.getView().setModel(oCarModel, "manifestCarModel");
        // },

        onInit: function () {
            
            var oObjectPage = this.byId("carDetailPage");
            if (oObjectPage) {
                oObjectPage.bindElement({           //bindElement binds the current object page to the single car object, this is so that the first car is always displayed on detail page
                    path: "/Cars/0",
                    model: "manifestCarModel"
                });
            }
        },

        onAfterRendering: function () {
            console.log("rendered");
        },

        onCarSelect: function (oEvent) {

            var oSelectedItem = oEvent.getParameter("listItem");
            var oContext = oSelectedItem.getBindingContext("manifestCarModel");     //

            
            var oObjectPage = this.byId("carDetailPage");           // binding the objectpagelayout to the selected car
            if (oObjectPage && oContext) {
                oObjectPage.bindElement({
                    path: oContext.getPath(),
                    model: "manifestCarModel"
                });

                MessageToast.show("Selected " + oContext.getProperty("car"));

            }
        }     
    });
});