import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders Surreal in the header", () => {
  render(<App />);
  const headerElement = screen.getByText(/surreal/i);
  expect(headerElement).toBeInTheDocument();
});
