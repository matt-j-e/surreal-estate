import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import device from "../helpers/device";

let leftPos = window.innerWidth / 2 - 420;
window.addEventListener("resize", () => {
  leftPos = window.innerWidth / 2;
  console.log(leftPos);
});
console.log(leftPos);

const FilterSection = styled.section`
  display: none;

  @media ${device.laptopM} {
    display: block;
    width: 60%;
    background-color: rgba(255, 255, 255, 0.7);
    color: #323232;
    border-radius: 50px;
    position: absolute;
    top: 350px;
    left: 20%;
    z-index: 10;
  }

  @media ${device.laptopL} {
    width: 840px;
    left: ${leftPos};
  }
`;

const FilterLinks = styled.ul`
  list-style: none;
  padding: 1rem 2.5rem;
  margin: 0;
`;

const FilterLinksItem = styled.li`
  a {
    color: inherit;
    text-decoration: none;
    padding: 0.1rem;
    border-radius: 5px;
  }

  a:hover {
    color: #daad65;
    background-color: #323232;
  }
`;

const Sidebar = () => {
  return (
    <FilterSection className="filter-section">
      <FilterLinks className="city-filter">
        <FilterLinksItem>
          <Link to='?query={"city": "Leeds"}'>Leeds</Link>
        </FilterLinksItem>
        <FilterLinksItem>
          <Link to='?query={"city": "Liverpool"}'>Liverpool</Link>
        </FilterLinksItem>
        <FilterLinksItem>
          <Link to='?query={"city": "Manchester"}'>Manchester</Link>
        </FilterLinksItem>
        <FilterLinksItem>
          <Link to='?query={"city": "Sheffield"}'>Sheffield</Link>
        </FilterLinksItem>
      </FilterLinks>
    </FilterSection>
  );
};

export default Sidebar;
