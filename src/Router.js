import React from "react";
import { useRoutes } from "hookrouter";

import { PageNotFound } from "./screens";
import { ROOT } from "./constants/paths";

import { routes, initialRoute } from "./routes";

const ROUTES = {
  [ROOT]: () => {
    let Scene = routes[initialRoute];
    return <Scene />;
  }
};

for (let key of Object.keys(routes)) {
  let path = key;
  let Scene = routes[path];
  ROUTES[path] = () => <Scene />;
}

function Router() {
  let match = useRoutes(ROUTES);
  return match || <PageNotFound />;
}

export default Router;
