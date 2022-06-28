import React from "react";
import { mount } from "@cypress/react";
import App from "./App";
/* eslint-disable jest/valid-expect */


it("Checar adição de apenas um produto no carrinho", () => {
  mount(<App />);
  cy.get("#product-0>button").click();
});

it("Teste de caso falho", () => {
  expect(true).to.equal(false)
});

