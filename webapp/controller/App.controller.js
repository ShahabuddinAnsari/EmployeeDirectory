sap.ui.define(
  ["employee/directory/controller/BaseController"],
  (BaseController) => {
    "use strict";

    return BaseController.extend("employee.directory.controller.App", {
      onInit() {
        console.log("+++ App controller is initialized");

        this.onInitBaseController();
      },
    });
  }
);
