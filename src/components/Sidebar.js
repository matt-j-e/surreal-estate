import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import styled from "styled-components";
import device from "../helpers/device";

const FilterSection = styled.section`
  background-color: rgba(255, 255, 255, 0.7);
  border: 3px solid #daad65;
  display: flex;

  @media ${device.laptopM} {
    width: 60%;
    height: 7rem;
    margin: -14rem auto 7rem auto;
    color: #232323;
    border-radius: 25px;
  }
`;

const FilterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media ${device.laptopM} {
    padding: 1rem 2.5rem;
  }
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

const SortLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media ${device.laptopM} {
    padding: 1rem 2.5rem;
  }
`;

const SortLinksItem = styled.li`
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
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearchInputChange = (event) => setSearchText(event.target.value);

  const handleSearch = (event) => {
    event.preventDefault();
    const queryString = buildQueryString("query", {
      title: { $regex: searchText },
    });
    history.push(queryString);
  };

  return (
    <FilterSection className="filter-section">
      <FilterLinks className="city-filter">
        <FilterLinksItem>
          <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        </FilterLinksItem>
        <FilterLinksItem>
          <Link to={buildQueryString("query", { city: "Liverpool" })}>
            Liverpool
          </Link>
        </FilterLinksItem>
        <FilterLinksItem>
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            Manchester
          </Link>
        </FilterLinksItem>
        <FilterLinksItem>
          <Link to={buildQueryString("query", { city: "Sheffield" })}>
            Sheffield
          </Link>
        </FilterLinksItem>
      </FilterLinks>
      <SortLinks className="price-sort">
        <SortLinksItem>
          <Link to={buildQueryString("sort", { price: 1 })}>
            Price Ascending
          </Link>
        </SortLinksItem>
        <SortLinksItem>
          <Link to={buildQueryString("sort", { price: -1 })}>
            Price Descending
          </Link>
        </SortLinksItem>
      </SortLinks>
      <div>
        <h4>Search</h4>
        <form onSubmit={handleSearch}>
          <input
            onChange={handleSearchInputChange}
            type="text"
            id="search"
            name="search"
            placeholder="eg. Flat"
          />
          <button type="submit">Go</button>
        </form>
      </div>
    </FilterSection>
  );
};

export default Sidebar;
