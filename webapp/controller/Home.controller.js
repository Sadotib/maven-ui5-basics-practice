sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ui5basicspractice/project1/controller/BaseController",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
<<<<<<< Updated upstream
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
=======
    "sap/ui/model/BindingMode",
    "ui5basicspractice/project1/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

], (Controller, BaseController, MessageBox, JSONModel, MessageToast, BindingMode, formatter, Filter, FilterOperator) => {
    "use strict";

    return BaseController.extend("ui5basicspractice.project1.controller.Home", {
        onInit() {
            let oCarModel = this.getOwnerComponent().getModel("manifestCarModel");
>>>>>>> Stashed changes

            this.getView().setModel(oCarModel, "manifestCarModel");
        },
        setTestModel: function (oEvent) {
            const testCarModel = this.getOwnerComponent().getModel("testManifestCarModel");
            var oSelectedItem = oEvent.getParameter("listItem");
            var oContext = oSelectedItem.getBindingContext("manifestCarModel");

            var oData = oContext.getObject();

            
            testCarModel.setProperty("/selectedCar", null);
            testCarModel.setProperty("/selectedCar", oData);
           


            // const oData = {
            //     car: oContext.getProperty("car"),
            //     manufacturer: oContext.getProperty("manufacturer"),
            //     DOB: oContext.getProperty("DOM"),
            //     Engine: oContext.getProperty("Engine"),
            //     Dimension: oContext.getProperty("Dimension"),
            // }

            // testCarModel.setData(oData, true)
            this.onNavigate("RouteHome2");
            MessageToast.show("Selected " + oContext.getProperty("car"));
        },
<<<<<<< Updated upstream
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
=======
        onPressFragment: function () {

            this.onLoadFragment();

>>>>>>> Stashed changes
        }

    });
});