sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("employee.directory.controller.BaseController", {
    onInitBaseController() {
      console.log("+++ BaseController is initialized");
    },

    // getRouterBase() {
    //   console.log("+++ calling Router from BaseController");
    //   return this.getOwnerComponent().getRouter();
    // },
  });
});
