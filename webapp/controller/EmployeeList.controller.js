sap.ui.define(
  ["employee/directory/controller/BaseController"],
  (BaseController) => {
    "use strict";

    return BaseController.extend("employee.directory.controller.EmployeeList", {
      onInit() {
        this.oRouter = this.getOwnerComponent().getRouter();
      },

      oRouter: null,

      onEmpListItemPress(oEvent) {
        const sSelectedEmployeeId = oEvent
          .getParameter("listItem")
          .getBindingContext()
          .getProperty("id");

        const selectedEmployeeData = oEvent
          .getParameter("listItem")
          .getBindingContext()
          .getObject();

        this.oRouter.navTo("employeeDetails", {
          employeeId: sSelectedEmployeeId,
        });
      },
    });
  }
);
