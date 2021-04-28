import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 60%;
  max-width: 500px;
  margin: 4rem auto 0 auto;
  background: #fff;
`;

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  div {
    padding: 0.6rem;
    margin-bottom: 1rem;
    background: rgba(218, 173, 101, 0.35);
    label {
      width: 100%;

      input,
      select {
        float: right;
      }

      select {
        appearance: none;
        width: 150px;
      }
    }
  }
`;

const Button = styled.button`
  background-color: #daad65;
  width: 50%;
  padding: 0.5rem;
  margin: 0 auto;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
`;

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Terrace",
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      city: "Manchester",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <FormWrapper className="add-property">
      <Form onSubmit={handleAddProperty}>
        <div>
          <label htmlFor="title">
            Property Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Property title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="type">
            Property Type
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Bungalow">Bungalow</option>
              <option value="Cottage">Cottage</option>
              <option value="Detached">Detached</option>
              <option value="End Terrace">End Terrace</option>
              <option value="Flat">Flat</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terrace">Terrace</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="bedrooms">
            Bedrooms (number of)
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
              size="5"
            />
          </label>
        </div>

        <div>
          <label htmlFor="bathrooms">
            Bathrooms (number of)
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
              size="5"
            />
          </label>
        </div>

        <div>
          <label htmlFor="price">
            Price (&pound;)
            <input
              type="number"
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
              size="10"
            />
          </label>
        </div>

        <div>
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Leeds">Leeds</option>
              <option value="Liverpool">Liverpool</option>
              <option value="Manchester">Manchester</option>
              <option value="Sheffield">Sheffield</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="email">
            Your email address
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@domain.co.uk"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <Button type="submit">Add</Button>
      </Form>
    </FormWrapper>
  );
};

export default AddProperty;
