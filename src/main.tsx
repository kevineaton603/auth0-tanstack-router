import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAuth0Client } from "@auth0/auth0-spa-js";

const queryClient = new QueryClient();

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    authClient: await createAuth0Client({
      clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
      domain: import.meta.env.VITE_AUTH0_DOMAIN,
      cacheLocation: "localstorage",
    }),
    queryClient: queryClient,
  },
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
