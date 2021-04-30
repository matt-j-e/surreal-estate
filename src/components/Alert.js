import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Success = styled.p`
  padding: 1rem;
  text-align: center;
  color: mediumseagreen;
  border: 2px solid mediumseagreen;
  font-weight: 900;
`;

const Error = styled.div`
  padding: 1rem;
  text-align: center;
  color: palevioletred;
  border: 2px solid palevioletred;
  font-weight: 900;
`;

const Alert = ({ message, success }) => {
  if (!message) return "";
  return success ? <Success>{message}</Success> : <Error>{message}</Error>;
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
