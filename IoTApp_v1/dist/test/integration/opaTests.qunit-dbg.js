/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"iot/app/IoTApp_v1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});