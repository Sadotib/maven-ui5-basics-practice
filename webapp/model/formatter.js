sap.ui.define([], function(){
    "use strict";

    return {
        carOwnershipText: function(sStatus){
            switch(sStatus){
                case "BN": return "Brand New";
                case "1": return "First Owner";
                case "2": return "Second Owner";
                case "3": return "Third Owner";
            }
        },
        carSizeText: function(sStatus){
            switch(sStatus){
                case "P": return "Pickup";
                case "L": return "Large";
                case "C": return "Compact";
                case "S": return "Sedan";
            }
        },


    }
})