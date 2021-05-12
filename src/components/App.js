import React, { useState } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import device from "../helpers/device";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Properties from "./Properties";
import SavedProperties from "./SavedProperties";
import AddProperty from "./AddProperty";
import "../styles/App.css";

const Wrapper = styled.div`
  margin: 0 5px;
  background-color: rgba(250, 206, 127, 0.33);
  min-height: 100vh;
  max-width: 1400px;

  @media ${device.tablet} {
    margin: 0 40px;
    background-color: rgba(250, 206, 127, 0.55);
  }

  @media ${device.laptopL} {
    margin: 0 auto;
  }
`;

function App() {
  const [userID, setUserID] = useState("");

  const handleLogin = (response) => {
    setUserID(response.userID);
  };

  const handleLogout = () => {
    window.FB.logout();
    setUserID("");
  };

  return (
    <Router>
      <Wrapper className="surreal-estate-app">
        <Navbar onLogin={handleLogin} userID={userID} onLogout={handleLogout} />
        <Hero />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Properties {...props} userID={userID} />}
          />
          <Route exact path="/add-property" component={AddProperty} />
          {userID ? (
            <Route
              exact
              path="/saved-properties"
              render={(props) => <SavedProperties {...props} userID={userID} />}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
