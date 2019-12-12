import { Login, Result, Home } from "./screens";
import { LOGIN, HOME, RESULT } from "./constants/paths";

let initialRoute = "/login";

let routes = {
  [LOGIN]: Login,
  [HOME]: Home,
  [RESULT]: Result
};

export { routes, initialRoute };
