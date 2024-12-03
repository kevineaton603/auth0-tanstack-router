import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "./__root";

export const IndexRoute = createRoute({
  getParentRoute: () => RootRoute,
  component: HomeComponent,
  path: "/",
});

function HomeComponent() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
