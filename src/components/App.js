import React from "react";
import TopNavigation from "./TopNavigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Gigs from "./Gigs";

function App() {
  return (
    <Router>
      <TopNavigation />
      <div className="m-4">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gigs">
          <Gigs />
        </Route>
      </div>
    </Router>
  );
}

export default App;
