import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "./__root";

const AuthRoute = createRoute({
  getParentRoute: () => RootRoute,
  id: "auth",
  beforeLoad: async ({ context, location }) => {
    if (!(await context.authClient.isAuthenticated())) {
      await context.authClient.loginWithRedirect({
        authorizationParams: {
          redirect_uri: `${window.location.origin}/authorize`,
        },
        appState: {
          redirect: location.href,
        },
      });
    }
  },
});

export default AuthRoute;
