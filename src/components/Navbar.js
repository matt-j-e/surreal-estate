import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import styled from "styled-components";
import { Link } from "react-router-dom";
import device from "../helpers/device";

const Header = styled.header`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  height: 100px;
  @media ${device.tablet} {
    padding-top: 20px;
    height: 140px;
    justify-content: space-evenly;
  }
  @media ${device.laptop} {
    padding-top: 0;
    height: 90px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Branding = styled.div`
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  left: 0;
  height: 50px;
  width: 50px;
  @media ${device.tablet} {
    top: 9px;
    height: 50px;
    width: 50px;
  }
`;

const BrandingName = styled.h1`
  font-weight: 900;
  font-size: 3rem;
  color: #daad65;
  margin: 0 0 0 60px;
  @media ${device.tablet} {
    font-size: 3.5rem;
    margin-left: 60px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  .facebook-button {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20%;
    margin-left: 1rem;
    color: #e5eaf5;
    background-color: #4c69ba;
    font-size: 0.8rem;
    padding: 0.1rem;
    cursor: pointer;
    @media ${device.tablet} {
      top: 20px;
      right: 20px;
      padding: 0.5rem;
      width: auto;
      font-size: inherit;
    }
    @media ${device.laptop} {
      position: inherit;
    }
  }
`;

const NavLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const NavLinksItem = styled.li`
  font-size: 0.8rem;
  margin: 0;
  padding: 0 0.2rem;
  text-transform: uppercase;
  display: inline-block;
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: rgb(218, 173, 101);
  }
  @media ${device.tablet} {
    font-size: 1rem;
    padding: 0 0 0 3rem;
  }
`;

const Navbar = ({ onLogin, userID, onLogout }) => {
  console.log(userID);
  return (
    <Header>
      <Branding className="branding">
        <Logo
          className="logo"
          src="./surreal-logo.png"
          alt="Surreal Estate logo"
          width="90"
        />
        <BrandingName>pad.</BrandingName>
      </Branding>
      <Nav>
        {userID ? (
          <button className="facebook-button" type="button" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <FacebookLogin
            appId="262160628929367"
            autoLoad={false}
            fields="name,email"
            callback={onLogin}
            cssClass="facebook-button"
          />
        )}
        <NavLinks>
          <NavLinksItem>
            <Link to="/">View Properties</Link>
          </NavLinksItem>
          {userID && (
            <NavLinksItem>
              <Link to="/saved-properties">Saved Properties</Link>
            </NavLinksItem>
          )}
          <NavLinksItem>
            <Link to="/add-property">Add a Property</Link>
          </NavLinksItem>
        </NavLinks>
      </Nav>
    </Header>
  );
};

Navbar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
};

export default Navbar;
