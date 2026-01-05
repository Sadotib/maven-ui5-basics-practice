sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/BindingMode",
    "ui5basicspractice/project1/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

], (Controller, MessageBox, JSONModel, MessageToast, BindingMode, formatter, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("ui5basicspractice.project1.controller.Home", {
        formatter: formatter,       //setting the formatter property with my formatter
        onInit() {
            let oCarData = {
                Cars: [
                    {
                        "car": "Corolla Altis",
                        "manufacturer": "Toyota",
                        "DOM": "2018",
                        "ownership": "BN"
                    },
                    {
                        "car": "City",
                        "manufacturer": "Honda",
                        "DOM": "2018",
                        "ownership": "BN"
                    },
                    {
                        "car": "800",
                        "manufacturer": "Maruti",
                        "DOM": "2010",
                        "ownership": "BN"
                    }
                ]
            };

            let oCarModel = new JSONModel(oCarData);
            oCarModel.setDefaultBindingMode(BindingMode.OneWay);
            this.getView().setModel(oCarModel, "controllerCarModel");

            console.log(oCarData);

        },
        onInfoMessageBoxPress: function () {
            MessageBox.information("This is a car database");
        },

        //value help part
        onValueHelpRequest: function (oEvent) {
            var sInputValue = oEvent.getSource().getValue();        

            this._oInput = oEvent.getSource();              //store reference to the input that opened the value help

            const lastHyphenIndex = this._oInput.sId.lastIndexOf('-');
            const lastTerm = this._oInput.sId.substring(lastHyphenIndex + 1);           //lastTerm stores the id of the input field whose value help is triggered
            console.log(lastTerm);

            switch (lastTerm) {
                case "carNameInput":
                    if (!this._pValueHelpDialog) {
                        this._pValueHelpDialog = this.loadFragment({
                            name: "ui5basicspractice.project1.view.carValueHelp"
                        });
                    }
                    break;

                case "carManufacturerInput":
                    if (!this._pManufacturerValueHelpDialog) {
                        this._pManufacturerValueHelpDialog = this.loadFragment({
                            name: "ui5basicspractice.project1.view.manufacturerValueHelp"
                        });
                    }
                    this._pValueHelpDialog = this._pManufacturerValueHelpDialog;
                    break;

                case "carOwnershipInput":
                    if (!this._pOwnershipValueHelpDialog) {
                        this._pOwnershipValueHelpDialog = this.loadFragment({
                            name: "ui5basicspractice.project1.view.ownershipValueHelp"
                        });
                    }
                    this._pValueHelpDialog = this._pOwnershipValueHelpDialog;
                    break;
            }

            this._pValueHelpDialog.then(function (oDialog) {
                oDialog.open(sInputValue);
            });
        },

        onValueHelpSearch: function (oEvent) {
            var sValue = oEvent.getParameter("value");
            var oFilter = new Filter("car", FilterOperator.Contains, sValue);

            oEvent.getSource().getBinding("items").filter([oFilter]);
        },

        onValueHelpClose: function (oEvent) {
            var oSelectedItem = oEvent.getParameter("selectedItem");
            oEvent.getSource().getBinding("items").filter([]);

            if (!oSelectedItem) {
                return;
            }

            this._oInput.setValue(oSelectedItem.getTitle());
        },

        //form submit button
        onSubmitBtnPress: function (evt) {

            MessageToast.show("Submitted");
            const oCarModel = this.getView().getModel("manifestCarModel");

            console.log(oCarModel.getData())
            const aCarData = oCarModel.getProperty("/Cars");

            const sOwnership = oCarModel.getProperty("/ownership");         
            const sFormattedOwnership = this.formatter.carOwnershipText(sOwnership);        //using the formatter here
            console.log(sFormattedOwnership);


            aCarData.push({
                "car": oCarModel.getProperty("/car"),
                "manufacturer": oCarModel.getProperty("/manufacturer"),
                "DOM": oCarModel.getProperty("/DOM"),
                "ownership": oCarModel.getProperty("/ownership")
            });
            oCarModel.refresh(true);
        }
    });
});