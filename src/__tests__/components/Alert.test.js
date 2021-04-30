import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../../components/Alert";

describe("Alert", () => {
  it("renders an Error alert", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    expect(getByText("Error!").textContent).toBe("Error!");
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a 'Success' alert", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!!!" success />
    );
    expect(getByText("Success!!!").textContent).toBe("Success!!!");
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders nothing when no message to show", () => {
    const { asFragment } = render(<Alert message="" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
