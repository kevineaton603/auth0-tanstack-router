import { createRoute, redirect } from "@tanstack/react-router";
import { RootRoute } from "./__root";

export const AuthorizeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "authorize",
  beforeLoad: async ({ context }) => {
    const result = await context.authClient.handleRedirectCallback<{
      redirect: string;
    }>();
    throw redirect({
      to: result.appState?.redirect,
    });
  },
});
