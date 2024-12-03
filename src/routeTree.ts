import { IndexRoute } from "./routes";
import { RootRoute } from "./routes/__root";
import { AboutRoute } from "./routes/about";
import AuthRoute from "./routes/auth";
import { AuthorizeRoute } from "./routes/authorize";

export const routeTree = RootRoute.addChildren([
  AuthRoute.addChildren([AboutRoute]),
  IndexRoute,
  AuthorizeRoute,
]);
