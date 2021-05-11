import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import device from "../helpers/device";
import getImageName from "../helpers/getImageName";

const PropCard = styled.article`
  width: 100%;
  background-color: white;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px 5px rgba(32, 32, 32, 0.2);
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
  opacity: 0.8;
  color: #323232;
  @media ${device.tablet} {
    font-size: 3rem;
    // opacity: inherit;
  }
  @media ${device.laptop} {
    font-size: 2.2rem;
    letter-spacing: -0.2rem;
  }
`;

const PropCardCity = styled.h4`
  text-transform: uppercase;
  font-weight: 400;
  // opacity: 0.5;
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

const PropCardSaveButton = styled.button`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  padding: 0.5rem 0;
  color: hsla(37, 61%, 43%, 1);
  text-transform: uppercase;
  font-weight: 700;
  border: 2px solid #daad65;
  border-radius: 25px;
  cursor: pointer;
  @media ${device.tablet} {
    padding: 1rem 0;
  }
`;

const PropertyCard = ({
  userID,
  favouriteId,
  id,
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
  onSaveProperty,
  onUnsaveProperty,
}) => {
  const mailtoString = `mailto:${email}`;
  let button = "";
  if (userID && !favouriteId) {
    button = (
      <PropCardSaveButton type="button" onClick={() => onSaveProperty(id)}>
        Save
      </PropCardSaveButton>
    );
  }
  if (favouriteId) {
    button = (
      <PropCardSaveButton
        type="button"
        onClick={() => onUnsaveProperty(favouriteId)}
      >
        Remove from favourites
      </PropCardSaveButton>
    );
  }
  return (
    <PropCard className="property-card" id={id}>
      <Image src={getImageName(type)} alt="The property" />
      <PropCardDetails className="property-card__details">
        <PropCardTitle className="property-card__title">{title}</PropCardTitle>
        <PropCardCity className="property-card__city">{city}</PropCardCity>
        <PropDataSection>
          <div className="property-card__type">{type}</div>
          <div className="property-card__bedrooms">{bedrooms} BED</div>
          <div className="property-card__bathrooms">{bathrooms} BATH</div>
        </PropDataSection>
        <PropCardPrice className="property-card__price">
          £{parseFloat(price).toLocaleString("en")}
        </PropCardPrice>
        <PropCardEmail className="property-card__email">
          <a href={mailtoString}>Email the owner</a>
        </PropCardEmail>
        {button}
      </PropCardDetails>
    </PropCard>
  );
};

PropertyCard.defaultProps = {
  onSaveProperty: null,
  onUnsaveProperty: null,
  favouriteId: null,
};

PropertyCard.propTypes = {
  userID: PropTypes.string.isRequired,
  favouriteId: PropTypes.string,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func,
  onUnsaveProperty: PropTypes.func,
};

export default PropertyCard;
