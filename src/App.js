import React from "react";
import "./App.css";
import { Grommet } from "grommet";
import News from "./components/News";
import Index from "./components/Index";
import Header from "./components/Header";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Grommet>
        <div className="css-000">
        <Route exact component={Header} />
        <div className="css-005">
          <div className="css-006">
          <Route exact path="/" component={Index} />
          <Route path="/News" component={News} />
          <Route path="/movie" component={Movie} />
          </div>
        </div> 
        </div>
      </Grommet>
    </Router>
  );
};

export default App;
