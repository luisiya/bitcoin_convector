import React from "react";
import { shallow } from "enzyme";
import App  from "./App.js";

describe("App", () => {
   const app = shallow(<App />);

   it("App renders correctly", () => {
      expect(app).toMatchSnapshot();
   });

   it("Check a connected Wallet existing", () => {
      expect(app.find("Connect(Wallet)").exists()).toBe(true)
   });

   it("Check then App contain a Loot component", () => {
      expect(app.find("Connect(Loot)").exists()).toBe(true)
   });

   it("Check if App has coindesk price page", () => {
      expect(app.find("a").props().href).toBe("https://www.coindesk.com/price");
   });

});


