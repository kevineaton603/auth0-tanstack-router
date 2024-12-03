import { createRoute, useRouteContext } from "@tanstack/react-router";
import AuthRoute from "./auth";
import { useQuery } from "@tanstack/react-query";

export const AboutRoute = createRoute({
  getParentRoute: () => AuthRoute,
  component: AboutComponent,
  path: "about",
});

function AboutComponent() {
  const { authClient } = useRouteContext({ from: "/auth/about" });
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => authClient.getUser(),
  });
  return (
    <div className="p-2">
      <h3>About</h3>
      <p>{data?.email}</p>
    </div>
  );
}
