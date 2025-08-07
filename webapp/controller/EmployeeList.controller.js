sap.ui.define(
  ["employee/directory/controller/BaseController"],
  (BaseController) => {
    "use strict";

    return BaseController.extend("employee.directory.controller.EmployeeList", {
      onInit() {
        console.log("+++ EmployeeList controller initialized");
        this.oRouter = this.getOwnerComponent().getRouter();
      },

      oRouter: null,

      onEmpListItemPress(oEvent) {
        console.log("clicked on the EMP List Item : ");

        const sSelectedEmployeeId = oEvent
          .getParameter("listItem")
          .getBindingContext()
          .getProperty("id");

        console.log(
          "+++ Emp ID of the selected row is : ",
          sSelectedEmployeeId
        );

        this.oRouter.navTo("employeeDetails", {
          employeeId: sSelectedEmployeeId,
        });
      },
    });
  }
);
