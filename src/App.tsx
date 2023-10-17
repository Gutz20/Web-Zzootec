import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ForgotPassword, Layout, NotFound } from "./components";
import {
  Customers,
  Dashboard,
  Delivery,
  Employees,
  Login,
  Marketing,
  Orders,
  Products,
} from "./pages";

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
          path: "/dashboard/customers",
          element: <Customers />,
        },
        {
          path: "/dashboard/delivery",
          element: <Delivery />,
        },
        {
          path: "/dashboard/orders",
          element: <Orders />,
        },
        {
          path: "/dashboard/products",
          element: <Products />,
        },
        {
          path: "/dashboard/employees",
          element: <Employees />,
        },
        {
          path: "/dashboard/marketing",
          element: <Marketing />,
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
