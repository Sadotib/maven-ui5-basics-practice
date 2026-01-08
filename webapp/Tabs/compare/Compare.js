sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var compareTab = BlockBase.extend("ui5basicspractice.project1.Tabs.compare.Compare", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "ui5basicspractice.project1.Tabs.compare.Compare",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "ui5basicspractice.project1.Tabs.compare.Compare",
					type: ViewType.XML
				}
			}
		}
	});
	return compareTab;
});