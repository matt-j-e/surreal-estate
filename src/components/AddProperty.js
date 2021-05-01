import React, { useState } from "react";
import styled from "styled-components";
import device from "../helpers/device";
import postProperty from "../requests/postProperty";
import Alert from "./Alert";

const FormWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #fff;

  @media ${device.tablet} {
    width: 80%;
    margin: 4rem auto 0 auto;
  }

  @media ${device.laptop} {
    width: 60%;
  }
`;

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  div {
    padding: 0.6rem;
    margin-bottom: 1rem;
    background: rgba(218, 173, 101, 0.45);

    label {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      align-items: center;
      width: 100%;

      input,
      select {
        padding: 0.5rem;
        font-size: 100%;
        color: rgba(50, 50, 50, 1);
        border: none;
      }

      input[type="text"],
      input[type="email"],
      select {
        text-align: right;
      }

      input[type="text"],
      input[type="email"] {
        width: 50%;
      }

      input:focus,
      select:focus {
        outline: 1px solid #323232;
      }

      .price-input-wrapper::before {
        content: "£ ";
      }

      select {
        appearance: none;
        width: 150px;
      }

      select::before {
        content: "x";
      }
    }
  }
`;

const Button = styled.button`
  border: none;
  background-color: #daad65;
  color: rgba(50, 50, 50, 1);
  font-weight: 700;
  width: 50%;
  padding: 0.5rem;
  margin: 0 auto;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  &:focus {
    outline: 1px solid #323232;
  }
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
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    // console.log(fields);
    setAlert({ message: "", isSuccess: false });
    postProperty(fields).then((status) => {
      status === 201
        ? setAlert({
            message: "Your property was added to the database.",
            isSuccess: true,
          })
        : setAlert({
            message: "A server error occurred. Please try again.",
          });
    });
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
      <Alert message={alert.message} success={alert.isSuccess} />
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
            Price
            <span className="price-input-wrapper">
              <input
                type="number"
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
                size="10"
              />
            </span>
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
