sap.ui.define([
    "sap/ui/core/UIComponent",
    "ui5basicspractice/project1/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("ui5basicspractice.project1.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
            const oModel = new sap.ui.model.json.JSONModel({
                selectedCar: null
            });
            this.setModel(oModel, "testManifestCarModel");

            // enable routing
            this.getRouter().initialize();
        }
    });
});