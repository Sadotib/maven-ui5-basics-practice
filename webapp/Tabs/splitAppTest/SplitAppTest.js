sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var SpecsTab2 = BlockBase.extend("ui5basicspractice.project1.Tabs.splitAppTest.SplitAppTest", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "ui5basicspractice.project1.Tabs.splitAppTest.SplitAppTest",
					type: "XML"
				},
				Expanded: {
					viewName: "ui5basicspractice.project1.Tabs.splitAppTest.SplitAppTest",
					type: "XML"
				}
			}
		}
	});

	return SpecsTab2;
});
