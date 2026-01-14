sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var SpecsTab2 = BlockBase.extend("ui5basicspractice.project1.Tabs.specs.SpecsTab2", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "ui5basicspractice.project1.Tabs.specs.SpecsTab2",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "ui5basicspractice.project1.Tabs.specs.SpecsTab2",
					type: ViewType.XML
				}
			}
		}
	});
	return SpecsTab2;
});