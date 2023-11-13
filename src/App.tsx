import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ForgotPassword, Layout, NotFound, ProtectedRoute } from "./components";
import {
  Assistance,
  Categories,
  CategoryForm,
  Customers,
  Dashboard,
  Delivery,
  DeliveryForm,
  EmployeeForm,
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
  const queryClient = new QueryClient();

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
      element: (
        <ProtectedRoute isAllowed={isAuth}>
          <Layout />
        </ProtectedRoute>
      ),
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
          path: "/dashboard/delivery/new",
          element: <DeliveryForm />,
        },
        {
          path: "/dashboard/delivery/:id",
          element: <DeliveryForm />,
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
          path: "/dashboard/categories",
          element: <Categories />,
        },
        {
          path: "/dashboard/categories/new",
          element: <CategoryForm />,
        },
        {
          path: "/dashboard/categories/:id",
          element: <CategoryForm />,
        },
        {
          path: "/dashboard/employees",
          element: <Employees />,
        },
        {
          path: "/dashboard/employees/new",
          element: <EmployeeForm />,
        },
        {
          path: "/dashboard/employees/:id",
          element: <EmployeeForm />,
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
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
