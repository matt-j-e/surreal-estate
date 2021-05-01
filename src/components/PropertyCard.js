import React from "react";
import styled from "styled-components";
import device from "../helpers/device";

const PropCard = styled.article`
  width: 100%;
  background-color: white;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row-reverse;
    margin-bottom: 40px;
  }
`;

const Image = styled.img`
  width: 100%;
  @media ${device.laptop} {
    flex-basis: 50%;
  }
`;

const PropertyCard = ({
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
}) => {
  return (
    <PropCard className="property-card">
      <Image src="example.jpg" alt="The property" />
      <div className="property-card__details">
        <div className="property-card__title">{title}</div>
        <div className="property-card__type">{type}</div>
        <div className="property-card__bedrooms">{bedrooms}</div>
        <div className="property-card__bathrooms">{bathrooms}</div>
        <div className="property-card__price">{price}</div>
        <div className="property-card__city">{city}</div>
        <div className="property-card__email">{email}</div>
      </div>
    </PropCard>
  );
};

export default PropertyCard;
