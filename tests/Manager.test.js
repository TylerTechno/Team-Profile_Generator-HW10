const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("initiation", () => {
    it("should have properties matching argument values", () => {
      const newEmployee = new Manager('Tyler', '1234', 'tylertechnotrade@gmail.com', '5678');

      expect(newEmployee.name).toEqual('Tyler');
      expect(newEmployee.id).toEqual('1234');
      expect(newEmployee.email).toEqual('tylertechnotrade@gmail.com');
      expect(newEmployee.officeNumber).toEqual('5678');
    });
  });

  describe("getRole", () => {
    it("should return the name passed into the constructor", () => {
      const newEmployee = new Manager('Tyler', '1234', 'tylertechnotrade@gmail.com', '5678');

      expect(newEmployee.getRole()).toEqual('Manager');
    });
  });
});