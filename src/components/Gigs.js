import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

export default function Gigs() {
  return (
    <>
      gigs page{" "}
      <Switch>
        <Route path={useRouteMatch().path + "/:gigId"}>
          <Gig />
        </Route>
      </Switch>
    </>
  );
}

function Gig() {
  return <>gig id: {useParams().gigId}</>;
}
