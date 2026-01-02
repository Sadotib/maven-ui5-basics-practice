sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5basicspractice.project1.controller.Home", {
        onInit() {
            oCarData = {
                "Name": "Corolla Altis",
                "Manufacturer": "Toyota",
                "DOM": "2018"
            }

            
        }
    });
});