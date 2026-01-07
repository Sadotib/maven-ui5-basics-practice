sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var infoTab = BlockBase.extend("ui5basicspractice.project1.Tabs.info.InfoTab", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "ui5basicspractice.project1.Tabs.info.InfoTab",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "ui5basicspractice.project1.Tabs.info.InfoTab",
					type: ViewType.XML
				}
			}
		}
	});
	return infoTab;
});
