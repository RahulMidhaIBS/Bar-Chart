/*global QUnit*/

sap.ui.define([
	"PieChart_Assignment/PieChart_Assignment/controller/View7.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View7 Controller");

	QUnit.test("I should test the View7 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});