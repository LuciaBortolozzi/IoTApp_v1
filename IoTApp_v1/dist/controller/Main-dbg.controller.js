sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("iot.app.IoTApp_v1.controller.Main", {
		onInit: function () {
			var oIoTSensorModel = new sap.ui.model.json.JSONModel();
			oIoTSensorModel.setProperty("/Data", []);
			this.getView().setModel(oIoTSensorModel, "IoTSensorModel");
			this.getIoTSensorData();
		},

		getIoTSensorData: function () {
			jQuery.ajax({
				type: "GET",
				contentType: "application/json",
				crossDomain: true,
				url: "/iotappv1/iot/processing/api/v1/tenant/tenantID/measures/capabilities/capabilityID?skip=0&top=100",
				xhrFields: {
					withCredentials: true
				},
				username: "root",
				password: "",
				dataType: "json",
				async: false,
				success: function (data, textStatus, jqXHR) {
					/*for (var intI = 0; intI < data.length; intI++) {
						data[intI].timeStamp = new Date(data[intI].timestamp);
					}*/
					this.getView().getModel("IoTSensorModel").setProperty("/Data", jQuery.extend(true, [], data));
				}.bind(this)
			});
		}
	});
});
