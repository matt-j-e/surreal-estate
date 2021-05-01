import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "3 bedroom house",
    type: "Semi-Detached",
    bedrooms: "3",
    bathrooms: "1",
    price: "200000",
    city: "Manchester",
    email: "name@email.com",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bedrooms={validProps.bedrooms}
        bathrooms={validProps.bathrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bedrooms={validProps.bedrooms}
        bathrooms={validProps.bathrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(getByText("3 bedroom house")).toHaveClass("property-card__title");
    expect(getByText(/semi-detached/i)).toHaveClass("property-card__type");
    expect(getByText("3")).toHaveClass("property-card__bedrooms");
    expect(getByText("1")).toHaveClass("property-card__bathrooms");
    expect(getByText("200000")).toHaveClass("property-card__price");
    expect(getByText("Manchester")).toHaveClass("property-card__city");
    expect(getByText("name@email.com")).toHaveClass("property-card__email");
  });
});
