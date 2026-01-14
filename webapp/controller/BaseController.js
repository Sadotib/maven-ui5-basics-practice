sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
], (Controller, JSONModel, MessageToast) => {
    "use strict";

    return Controller.extend("ui5basicspractice.project1.controller.BaseController", {

        onNavigate: function (route) {
            this.getOwnerComponent().getRouter().navTo(route)

        },
        onLoadFragment: function () {
            
            if (!this._pValueHelpDialog) {
                        this._pValueHelpDialog = this.loadFragment({
                            name: "ui5basicspractice.project1.view.Fragment"
                        });
                    }
            this._pValueHelpDialog.then(function (oDialog) {
                oDialog.open();
            });
        }

    });
});