import { render, screen } from "@testing-library/react";
import { Login } from "./Login";
import { BrowserRouter } from "react-router-dom";

test("if email and password exists", () => {
  render(<Login />, { wrapper: BrowserRouter });
  const email = screen.getByLabelText("email");
  expect(email).toBeInTheDocument();
  const password = screen.getByLabelText("password");
  expect(password).toBeInTheDocument();
  const submit = screen.getByLabelText("submit");
  expect(submit).toBeInTheDocument();
});
