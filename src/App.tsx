import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ForgotPassword, Layout, NotFound } from "./components";
import { Dashboard, Login } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
      errorElement: <NotFound />,
    },
    {
      path: "/dashboard",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/dashboard/clientes",
          element: <div>Clientes</div>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
