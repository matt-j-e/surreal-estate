import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  // return <div>Properties Page</div>;
  return (
    <PropertyCard
      title="3 bedroom house"
      type="Semi-Detached"
      bedrooms="3"
      bathrooms="1"
      price="200000"
      city="Manchester"
      email="name@email.com"
    />
  );
};

export default Properties;
