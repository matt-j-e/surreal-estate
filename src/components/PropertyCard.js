import React from "react";

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
    <article className="property-card">
      <div className="property-card__title">{title}</div>
      <div className="property-card__type">{type}</div>
      <div className="property-card__bedrooms">{bedrooms}</div>
      <div className="property-card__bathrooms">{bathrooms}</div>
      <div className="property-card__price">{price}</div>
      <div className="property-card__city">{city}</div>
      <div className="property-card__email">{email}</div>
    </article>
  );
};

export default PropertyCard;
