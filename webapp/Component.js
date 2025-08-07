sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel",
    "employee/directory/model/models",
  ],
  (UIComponent, Device, JSONModel, models) => {
    "use strict";

    return UIComponent.extend("employee.directory.Component", {
      metadata: {
        manifest: "json",
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
      },

      init() {
        console.log("+++ Component onInit function is called");

        UIComponent.prototype.init.apply(this, arguments);
        this.setModel(models.createDeviceModel(), "device");
        this.getRouter().initialize();
      },
    });
  }
);
