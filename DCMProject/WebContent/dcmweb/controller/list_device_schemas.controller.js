sap.ui.define(
				[ 'sap/ui/core/mvc/Controller',
				  'sap/ui/core/routing/History'],
				function(Controller, History) {
					"use strict";

					var PageController = Controller
							.extend(
									"net.cb.dcm.frontend.controller.list_device_schemas",
									{	
										onNavigateBack : function(event) {
											var oHistory = History.getInstance();
											var sPreviousHash = oHistory.getPreviousHash();

											if (sPreviousHash !== undefined) {
												window.history.go(-1);
											} else {
												var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
												oRouter.navTo("Main", true);
											}
										},
										onInit : function(evt) {
										},
										onAddSchema: function(){
											var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
											oRouter.navTo("AddSchema");
										},
										onDetailPress : function(event) {
											var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
											var loBindingContext = event.getSource().getBindingContext();
											var lvId = loBindingContext.getProperty("Id");
											oRouter.navTo("EditSchema", {id:lvId});
										}
									});

					return PageController;
				});