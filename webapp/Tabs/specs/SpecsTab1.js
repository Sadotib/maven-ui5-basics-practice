sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var SpecsTab1 = BlockBase.extend("ui5basicspractice.project1.Tabs.specs.SpecsTab1", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "ui5basicspractice.project1.Tabs.specs.SpecsTab1",
					type: "XML"
				},
				Expanded: {
					viewName: "ui5basicspractice.project1.Tabs.specs.SpecsTab1",
					type: "XML"
				}
			}
		}
	});

	return SpecsTab1;
});
