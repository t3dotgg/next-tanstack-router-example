import {
  Link,
  Outlet,
  ReactRouter,
  RootRoute,
  Route,
  RouterProvider,
} from "@tanstack/react-router";

const rootRoute = new RootRoute({
  component: () => (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}

function About() {
  return <div>Hello from About!</div>;
}

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = new ReactRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
