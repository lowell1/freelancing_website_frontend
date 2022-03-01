import React from "react";
import TopNavigation from "./TopNavigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Gigs from "./GigList";

function App() {
  return (
    <Router>
      <TopNavigation />
      <div className="m-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gigs" component={Gigs} />
          <Route>not found</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
