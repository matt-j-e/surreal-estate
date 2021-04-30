import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("renders an 'Error' alert", () => {
    render(<Alert message="Error!" />);
    const alertMessage = screen.getByText(/Error!/);
    expect(alertMessage).toBeInTheDocument();
  });

  it("renders a 'Success' alert", () => {
    render(<Alert message="Success!!!" success />);
    const alertMessage = screen.getByText(/Success!!!/);
    expect(alertMessage).toBeInTheDocument();
  });

  it("renders nothing when no message to show", () => {
    render(<Alert message="" />);
    const successMessage = screen.queryByText(
      /Your property was added to the database/
    );
    const errorMessage = screen.queryByText(
      /A server error occurred. Please try again./
    );
    expect(successMessage).not.toBeInTheDocument();
    expect(errorMessage).not.toBeInTheDocument();
  });
});

describe("Alert rendering", () => {
  it("renders the error Alert correctly", () => {
    const { asFragment } = render(
      <Alert message="A server error occurred. Please try again." />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the success Alert correctly", () => {
    const { asFragment } = render(
      <Alert message="Your property was added to the database." success />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders no alert when no message is passed in", () => {
    const { asFragment } = render(<Alert message="" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
