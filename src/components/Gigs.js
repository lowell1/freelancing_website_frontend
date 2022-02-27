import React, { useState, useEffect } from "react";
// import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

export default function Gigs() {
  const [gigData, setGigData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/gigs`)
      .then((res) => res.json())
      .then(setGigData)
      .catch(setFetchError);
  }, []);

  if (fetchError) {
    console.log(fetchError);
    return <>Could not load gigs :(</>;
  } else if (gigData === null) {
    return <>Loading gigs...</>;
  } else {
    return (
      <>
        {JSON.stringify(gigData)}
        {/* <Switch>
          <Route path={useRouteMatch().path + "/:gigId"}>
            <Gig />
          </Route>
        </Switch> */}
      </>
    );
  }
}

// function Gig() {
//   return <>gig id: {useParams().gigId}</>;
// }
