import React, { useState, useEffect } from "react";
import styled from "styled-components";
import device from "../helpers/device";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import getProperties from "../requests/getProperties";

const PropCards = styled.div`
  padding: 0px;
  @media ${device.tablet} {
    padding: 40px;
  }
`;

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    getProperties().then((res) => {
      if (!res || res.status !== 200) {
        setAlert({
          message: "Database connection failed. Please try again later.",
        });
      } else {
        setProperties(res.data);
      }
    });
  }, []);

  // console.log(alert, properties);

  return (
    <PropCards className="property-cards">
      <Alert message={alert.message} success={false} />
      {properties.map((property) => {
        return (
          <PropertyCard
            key={property._id}
            title={property.title}
            type={property.type}
            bedrooms={property.bedrooms}
            bathroom={property.bathrooms}
            price={property.price}
            city={property.city}
            email={property.email}
          />
        );
      })}
    </PropCards>
    
  );
};

export default Properties;
