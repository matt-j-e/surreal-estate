import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import device from "../helpers/device";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import Sidebar from "./Sidebar";
import getProperties from "../requests/getProperties";
import saveFavourite from "../requests/saveFavourite";
import getCity from "../requests/getCity";

const PropCards = styled.div`
  position: relative;
  padding: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media ${device.tablet} {
    padding: 40px;
  }
  @media ${device.laptop} {
    padding: 40px 0 0 0;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Properties = ({ userID }) => {
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

  const { search } = useLocation();
  useEffect(() => {
    getCity(search).then((res) => {
      if (!res || res.status !== 200) {
        setAlert({
          message: "Database connection failed. Please try again later.",
        });
      } else {
        setProperties(res.data);
      }
    });
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    const values = {
      propertyListing: propertyId,
      fbUserId: userID,
    };
    saveFavourite(values).then((res) => {
      // eslint-disable-next-line no-console
      console.log(res);
    });
  };

  // console.log(alert, properties);

  return (
    <>
      <Sidebar />
      <PropCards className="property-cards">
        <Alert message={alert.message} success={false} />
        {properties.map((property) => {
          return (
            <PropertyCard
              userID={userID}
              key={property._id}
              id={property._id}
              title={property.title}
              type={property.type}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              price={property.price}
              city={property.city}
              email={property.email}
              onSaveProperty={handleSaveProperty}
            />
          );
        })}
      </PropCards>
    </>
  );
};

Properties.propTypes = {
  userID: PropTypes.string,
};

Properties.defaultProps = {
  userID: null,
};

export default Properties;
