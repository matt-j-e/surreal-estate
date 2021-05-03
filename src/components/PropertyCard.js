import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import device from "../helpers/device";

const PropCard = styled.article`
  width: 100%;
  background-color: white;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    width: 45%;
  }
  @media ${device.laptopL} {
    width: 30%;
  }
`;

const Image = styled.img`
  width: 100%;
  // @media ${device.laptop} {
  //   flex-basis: 50%;
  // }
`;

const PropCardDetails = styled.section`
  padding: 0 1rem 1rem 1rem;
  text-align: center;
  @media ${device.tablet} {
    border: 1px solid rgba(218, 173, 101, 0.6);
  }
  @media ${device.laptop} {
    // flex-basis: 50%;
    padding: 2.5rem;
    text-align: inherit;
    border: none;
  }
`;

const PropCardTitle = styled.h3`
  text-transform: uppercase;
  font-size: 2.3rem;
  font-weight: 300;
  letter-spacing: -0.1rem;
  opacity: 0.5;
  color: #323232;
  @media ${device.tablet} {
    color: black;
    font-weight: 100;
    font-size: 3rem;
    opacity: inherit;
  }
  @media ${device.laptop} {
    font-size: 2.2rem;
    // letter-spacing: -0.2rem;
  }
`;

const PropCardCity = styled.h4`
  text-transform: uppercase;
  font-weight: 400;
  opacity: 0.5;
`;

const PropDataSection = styled.section`
  color: #daad65;
  text-transform: uppercase;
  font-weight: 700;
  padding: 1.5rem 0 1rem 0;
  display: flex;
  flex-direcion: row;
  justify-content: space-evenly;
  div {
    flex-basis: 33%;
    // text-align: center;
  }
  @media ${device.laptop} {
    padding: 2rem 0 1rem 0;
  }
`;

const PropCardPrice = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding: 0.5rem 0;
  @media ${device.laptop} {
    padding: 1rem 0;
  }
`;

const PropCardEmail = styled.div`
  width: 100%;
  text-align: center;
  a {
    background: #daad65;
    display: inline-block;
    padding: 0.5rem 0;
    width: 100%;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 25px;
    @media ${device.tablet} {
      padding: 1rem 0;
    }
    // @media ${device.laptop} {
    //   border-radius: 5px;
    //   background: rgba(218, 173, 101, 0.8);
    //   color: inherit;
    // }
  }
`;

const PropertyCard = ({
  id,
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
}) => {
  const mailtoString = `mailto:${email}`;
  console.log(id);
  return (
    <PropCard className="property-card">
      <Image src="example3.jpg" alt="The property" />
      <PropCardDetails className="property-card__details">
        <PropCardTitle className="property-card__title">{title}</PropCardTitle>
        <PropCardCity className="property-card__city">{city}</PropCardCity>
        <PropDataSection>
          <div className="property-card__type">{type}</div>
          <div className="property-card__bedrooms">{bedrooms} BED</div>
          <div className="property-card__bathrooms">{bathrooms} BATH</div>
        </PropDataSection>
        <PropCardPrice className="property-card__price">£{price}</PropCardPrice>
        <PropCardEmail className="property-card__email">
          <a href={mailtoString}>Email the owner</a>
        </PropCardEmail>
      </PropCardDetails>
    </PropCard>
  );
};

PropertyCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
