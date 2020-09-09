//@ui5-bundle iot/app/IoTApp_v1/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"iot/app/IoTApp_v1/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","iot/app/IoTApp_v1/model/models"],function(e,t,i){"use strict";return e.extend("iot.app.IoTApp_v1.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"iot/app/IoTApp_v1/controller/Main.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("iot.app.IoTApp_v1.controller.Main",{onInit:function(){var e=new sap.ui.model.json.JSONModel;e.setProperty("/Data",[]);this.getView().setModel(e,"IoTSensorModel");this.getIoTSensorData()},getIoTSensorData:function(){jQuery.ajax({type:"GET",contentType:"application/json",crossDomain:true,url:"/iotappv1/iot/processing/api/v1/tenant/120013146/measures/capabilities/7f9eebe7-4d54-4a9b-9705-c4128d5db57c?skip=0&top=100",xhrFields:{withCredentials:true},username:"root",password:"uZ3nwZifcCstnM5",dataType:"json",async:false,success:function(e,t,o){this.getView().getModel("IoTSensorModel").setProperty("/Data",jQuery.extend(true,[],e))}.bind(this)})}})});
},
	"iot/app/IoTApp_v1/i18n/i18n.properties":'title=IoTApp\nappTitle=IoTApp_v1\nappDescription=App Description',
	"iot/app/IoTApp_v1/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"iot.app.IoTApp_v1","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"ui5template.basicSAPUI5ApplicationProject","version":"1.40.12"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"iot.app.IoTApp_v1.view.Main","type":"XML","async":true,"id":"Main"},"dependencies":{"minUI5Version":"1.65.6","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"iot.app.IoTApp_v1.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"iot.app.IoTApp_v1.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteMain","pattern":"RouteMain","target":["TargetMain"]}],"targets":{"TargetMain":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Main","viewName":"Main"}}}},"sap.platform.hcp":{"uri":"webapp","_version":"1.1.0"}}',
	"iot/app/IoTApp_v1/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"iot/app/IoTApp_v1/view/Main.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" xmlns:semantic="sap.m.semantic" controllerName="iot.app.IoTApp_v1.controller.Main"\n\tdisplayBlock="true"><Shell id="shell"><App id="app"><pages><semantic:FullscreenPage title="IOT Sensor Data" navButtonPress="onNavBack" showNavButton="false"><semantic:content><Table width="100%" id="idVibrationTableSensorTable" items="{IoTSensorModel>/Data}" sticky="ColumnHeaders,HeaderToolbar"\n\t\t\t\t\t\t\tenableBusyIndicator="true"><columns><Column><Text text="Temperature(°C)"/></Column><Column><Text text="Humidity(%)"/></Column></columns><items><ColumnListItem><cells><Text text="{IoTSensorModel>measure/temperature}"/><Text text="{IoTSensorModel>measure/humidity}"/></cells></ColumnListItem></items></Table></semantic:content></semantic:FullscreenPage></pages></App></Shell></mvc:View>'
}});