const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("initiation", () => {
    it("should have properties matching argument values", () => {
      const newEmployee = new Employee('Tyler', '1234', 'tylertechnotrade@gmail.com');

      expect(newEmployee.name).toEqual('Tyler');
      expect(newEmployee.id).toEqual('1234');
      expect(newEmployee.email).toEqual('tylertechnotrade@gmail.com');
    });
  });

  describe("getName", () => {
    it("should return the name passed into the constructor", () => {
      const newEmployee = new Employee('Tyler', '1234', 'tylertechnotrade@gmail.com');

      expect(newEmployee.getName()).toEqual('Tyler');
    });
  });

  describe("getID", () => {
    it("should return the name passed into the constructor", () => {
      const newEmployee = new Employee('Tyler', '1234', 'tylertechnotrade@gmail.com');

      expect(newEmployee.getID()).toEqual('1234');
    });
  });

  describe("getEmail", () => {
    it("should return the name passed into the constructor", () => {
      const newEmployee = new Employee('Tyler', '1234', 'tylertechnotrade@gmail.com');

      expect(newEmployee.getEmail()).toEqual('tylertechnotrade@gmail.com');
    });
  });

  describe("getRole", () => {
    it("should return the name passed into the constructor", () => {
      const newEmployee = new Employee('Tyler', '1234', 'tylertechnotrade@gmail.com');

      expect(newEmployee.getRole()).toEqual('Employee');
    });
  });
});