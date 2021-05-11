import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import device from "../helpers/device";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import Sidebar from "./Sidebar";
import getFavourites from "../requests/getFavourites";

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

const SavedProperties = ({ userID }) => {
  const [savedProperties, setSavedProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    getFavourites(userID).then((res) => {
      if (!res || res.status !== 200) {
        setAlert({
          message: "Database connection failed. Please try again later.",
        });
      } else {
        console.log(res.data);
        const userFaves = [];
        res.data.forEach((property) => {
          userFaves.push(property.propertyListing);
          setSavedProperties(userFaves);
        });
      }
    });
  }, [userID]);

  console.log(savedProperties);

  return (
    <>
      <Sidebar />
      <PropCards className="property-cards">
        <Alert message={alert.message} success={false} />
        {savedProperties.map((property) => {
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
            />
          );
        })}
      </PropCards>
    </>
  );
};

SavedProperties.propTypes = {
  userID: PropTypes.string,
};

SavedProperties.defaultProps = {
  userID: null,
};

export default SavedProperties;
