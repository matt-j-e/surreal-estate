import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import styled from "styled-components";
import device from "../helpers/device";

const FilterSection = styled.section`
  background-color: #efefef;
  padding: 10px;
  border-bottom: 10px solid white;
  display: flex;
  flex-direction: column;
  .filter-sort-wrapper {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1rem;
  }
  @media ${device.laptopM} {
    background-color: rgba(255, 255, 255, 0.7);
    width: 40%;
    padding: 1rem;
    margin: -14rem auto 3rem auto;
    color: #232323;
    border-radius: 25px;
    border: 4px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 10px 5px rgba(32, 32, 32, 0.4);
  }
`;

const FilterSectionHeader = styled.h4`
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const FilterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  // @media ${device.laptopM} {
  //   padding: 1rem 2.5rem;
  // }
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
  // @media ${device.laptopM} {
  //   padding: 1rem 2.5rem;
  // }
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

const SearchWrapper = styled.div`
  padding: 5px 0;
  margin: 0 auto;
  button {
    background-color: hsla(37, 61%, 43%, 1);
    color: white;
    font-weight: 700;
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
    setSearchText("");
    document.getElementById("search").value = "";
    history.push(queryString);
  };

  return (
    <FilterSection className="filter-section">
      <div className="filter-sort-wrapper">
        <FilterLinks className="city-filter">
          <FilterSectionHeader>Filter by city</FilterSectionHeader>
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
          <FilterSectionHeader>Sort by price</FilterSectionHeader>
          <SortLinksItem>
            <Link to={buildQueryString("sort", { price: 1 })}>Ascending</Link>
          </SortLinksItem>
          <SortLinksItem>
            <Link to={buildQueryString("sort", { price: -1 })}>Descending</Link>
          </SortLinksItem>
        </SortLinks>
      </div>
      <SearchWrapper>
        <form onSubmit={handleSearch}>
          <input
            onChange={handleSearchInputChange}
            type="text"
            id="search"
            name="search"
            placeholder="eg. Flat"
          />
          <button type="submit">Search</button>
        </form>
      </SearchWrapper>
    </FilterSection>
  );
};

export default Sidebar;
