sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/BindingMode"
], (Controller, MessageBox, JSONModel, MessageToast, BindingMode) => {
    "use strict";

    return Controller.extend("ui5basicspractice.project1.controller.Home", {
        onInit() {
            let oCarData = {
                "car": "Corolla Altis",
                "manufacturer": "Toyota",
                "DOM": "2018"
            };

            let oCarModel = new JSONModel(oCarData);
            oCarModel.setDefaultBindingMode(BindingMode.TwoWay);
            this.getView().setModel(oCarModel, "carModel");
            
            console.log(oCarData);

        },
        onInfoMessageBoxPress: function () {
            MessageBox.information("This is a car database");
        },
        onSubmitBtnPress: function (evt) {
            MessageToast.show("Submitted");
            const oCarModel = this.getView().getModel("manifestCarModel");
            const aCarData = oCarModel.getProperty("/Cars");
            aCarData.push({
                "car": oCarModel.getProperty("/car"),
                "manufacturer": oCarModel.getProperty("/manufacturer"),
                "DOM": oCarModel.getProperty("/DOM")
            });
            oCarModel.refresh(true);
        }
    });
});