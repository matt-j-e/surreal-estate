import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/App.css";

function App() {
  return (
    <Router>
      <div className="surreal-estate-app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
