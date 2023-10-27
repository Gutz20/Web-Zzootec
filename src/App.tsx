import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ForgotPassword, Layout, NotFound } from "./components";
import {
  Assistance,
  Customers,
  Dashboard,
  Delivery,
  DeliveryId,
  Employees,
  Login,
  Marketing,
  Orders,
  Products,
  Reports,
  Subsidiaries,
  Suppliers,
} from "./pages";
import { useAuthStore } from "./store";

function App() {
  const isAuth = useAuthStore((state) => state.isAuth);

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
          path: "/dashboard/delivery/:deliveryId",
          element: <DeliveryId />,
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
        {
          path: "/dashboard/reports",
          element: <Reports />,
        },
        {
          path: "/dashboard/assistance",
          element: <Assistance />,
        },
        {
          path: "/dashboard/subsidiaries",
          element: <Subsidiaries />,
        },
        {
          path: "/dashboard/suppliers",
          element: <Suppliers />,
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
