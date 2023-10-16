import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components";
import { Dashboard, Login } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          path: "/dashboard",
          element: <Dashboard />,
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
