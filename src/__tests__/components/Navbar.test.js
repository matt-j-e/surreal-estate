import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Navbar from "../../components/Navbar";

describe("Navbar", () => {
  it("Renders the navbar correctly", () => {
    const { asFragment } = render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
