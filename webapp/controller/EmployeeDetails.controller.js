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

          const oSelectedEmployee = this.getView()
            .getModel()
            .getProperty("/employees")
            .find((employee) => employee.id === sEmployeeId);

          if (oSelectedEmployee) {
            const oSelectedEmployeeModel = new sap.ui.model.json.JSONModel(
              oSelectedEmployee
            );

            this.getView().setModel(
              oSelectedEmployeeModel,
              "selectedEmployeeModel"
            );

            this.getView().bindElement({
              path: "/",
              model: "selectedEmployeeModel",
            });
          }
        },

        onNavBack() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("employeeList", {}, true);
        },
      }
    );
  }
);
