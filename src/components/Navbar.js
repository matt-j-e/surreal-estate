import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import device from "../helpers/device";

const Header = styled.header`
  background: white;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  height: 80px;
  @media ${device.tablet} {
    padding-top: 20px;
    height: 120px;
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
  top: -9px;
  left: 0;
  /* outline: 1px solid red; */
  height: 40px;
  width: 40px;
  @media ${device.tablet} {
    height: 60px;
    width: 60px;
  }
`;

const BrandingName = styled.h1`
  font-weight: 200;
  font-size: 2rem;
  letter-spacing: -0.1rem;
  color: black;
  text-transform: uppercase;
  margin: 0 0 0 40px;
  span {
    color: #daad65;
    font-weight: 400;
  }
  @media ${device.tablet} {
    font-size: 3rem;
    margin-left: 60px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const NavLinksItem = styled.li`
  margin: 0;
  padding: 0 0.5rem;
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
    padding: 0 0 0 3rem;
  }
`;

const Navbar = () => {
  return (
    <Header>
      <Branding className="branding">
        <Logo
          className="logo"
          src="./surreal-logo.png"
          alt="Surreal Estate logo"
          width="90"
        />
        <BrandingName>
          Surreal<span>Estate</span>
        </BrandingName>
      </Branding>
      <Nav>
        <NavLinks>
          <NavLinksItem>
            <Link to="/">View Properties</Link>
          </NavLinksItem>
          <NavLinksItem>
            <Link to="/add-property">Add a Property</Link>
          </NavLinksItem>
        </NavLinks>
      </Nav>
    </Header>
  );
};

export default Navbar;
