import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import device from "../helpers/device";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/App.css";

const Wrapper = styled.div`
  margin: 0 5px;
  // background-color: rgba(250, 206, 127, 0.33);
  min-height: 100vh;
  max-width: 1400px;

  @media ${device.tablet} {
    margin: 0 20px;
    background-color: rgba(250, 206, 127, 0.33);
  }

  @media ${device.laptopL} {
    margin: 0 auto;
  }
`;

function App() {
  return (
    <Router>
      <Wrapper className="surreal-estate-app">
        <Navbar />
        <Hero />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
