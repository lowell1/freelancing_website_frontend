import React from "react";
import TopNavigation from "./TopNavigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Gigs from "./Gigs";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNavigation />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gigs">
          <Gigs />
        </Route>
      </Router>
    </div>
  );
}

export default App;
