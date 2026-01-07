sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var SpecsTab2 = BlockBase.extend("ui5basicspractice.project1.Tabs.specs.SpecsTab2", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "ui5basicspractice.project1.Tabs.specs.SpecsTab2",
					type: "XML"
				},
				Expanded: {
					viewName: "ui5basicspractice.project1.Tabs.specs.SpecsTab2",
					type: "XML"
				}
			}
		}
	});

	return SpecsTab2;
});
