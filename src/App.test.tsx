import React from "react";
import { mount } from "@cypress/react";
import App from "./App";

it("Checar adição de apenas um produto no carrinho", () => {
  mount(<App />);
  cy.get("#product-0>button").click();
});



