import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import device from "../helpers/device";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/App.css";

const Wrapper = styled.div`
  margin: 0 5px;
  background-color: #e2e2e2;
  min-height: 100vh;

  @media ${device.tablet} {
    margin: 0 40px;
  }
`;

function App() {
  return (
    <Router>
      <Wrapper className="surreal-estate-app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
