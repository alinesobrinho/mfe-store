import {
  render,
  screen,
} from "@testing-library/react";

import {
  BrowserRouter,
} from "react-router-dom";

import {
  describe,
  test,
  expect,
} from "vitest";

import Login from "./login";

describe("Login Page", () => {
  test(
    "renders login button",
    () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );

      const button =
        screen.getByText("Entrar");

      expect(button)
        .toBeTruthy();
    }
  );
});