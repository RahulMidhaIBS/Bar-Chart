/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"PieChart_Assignment/PieChart_Assignment/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});