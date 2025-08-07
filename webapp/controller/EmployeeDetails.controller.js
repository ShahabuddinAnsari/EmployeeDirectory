sap.ui.define(
  ["employee/directory/controller/BaseController"],
  function (BaseController) {
    "use strict";

    return BaseController.extend(
      "employee.directory.controller.EmployeeDetails",
      {
        onInit() {
          console.log("+++ EmployeeDetails controller is initialized");

          const oRouter = this.getOwnerComponent().getRouter();
          oRouter
            .getRoute("employeeDetails")
            .attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched(oEvent) {
          const sEmployeeId = oEvent.getParameter("arguments").employeeId;
          console.log("+++ employeeID in onRoutMatched ", sEmployeeId);

          this.getView().bindElement({
            path: `/employee/${sEmployeeId}`,
          });
        },
      }
    );
  }
);
