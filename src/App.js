import React from "react";
import "./App.css";
import { Grommet } from "grommet";
import News from "./components/News";
import Header from "./components/Header";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Grommet>
        <Route exact component={Header} />
        <div className="css-005">
          <Route path="/News" component={News} />
        </div>
        <Route path="/movie" component={Movie} />
      </Grommet>
    </Router>
  );
};

export default App;
