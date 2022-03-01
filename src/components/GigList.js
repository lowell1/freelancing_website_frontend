import React, { useState, useEffect } from "react";
import {
  Switch,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function GigList() {
  const [gigList, setGigList] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const match = useRouteMatch();
  console.log(`${match.url}:id`);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/gigs`)
      .then((res) => res.json())
      .then(setGigList)
      .catch(setFetchError);
  }, []);

  if (fetchError) {
    console.log(fetchError);
    return <>Could not load gigs :(</>;
  } else if (gigList === null) {
    return <>Loading gigs...</>;
  } else {
    return (
      <>
        <Switch>
          <Route path={`${match.url}/:id`} component={Gig} />
          <Route path={match.url}>
            {gigList.map((gig) => (
              <Link to={`${match.url}/${gig.id}`}>{gig.title}</Link>
            ))}
          </Route>
        </Switch>
      </>
    );
  }
}

function Gig() {
  return <>gig id: {useParams().id}</>;
}
