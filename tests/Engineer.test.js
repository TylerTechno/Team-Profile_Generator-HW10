const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("initiation", () => {
    it("should have properties matching argument values", () => {
      const newEmployee = new Engineer('Tyler', '1234', 'tylertechnotrade@gmail.com', '5678');

      expect(newEmployee.name).toEqual('Tyler');
      expect(newEmployee.id).toEqual('1234');
      expect(newEmployee.email).toEqual('tylertechnotrade@gmail.com');
      expect(newEmployee.github).toEqual('5678');
    });
  });

  describe("getGithub", () => {
    it("should return the GitHub username passed into the constructor", () => {
      const newEmployee = new Engineer('Tyler', '1234', 'tylertechnotrade@gmail.com', '5678');

      expect(newEmployee.getGithub()).toEqual('5678');
    });
  });

  describe("getRole", () => {
    it("should return the role of the employee", () => {
      const newEmployee = new Engineer('Tyler', '1234', 'tylertechnotrade@gmail.com', '5678');

      expect(newEmployee.getRole()).toEqual('Engineer');
    });
  });
});