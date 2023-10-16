import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components";
import { Login } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello</div>,
      errorElement: <NotFound />,
      children: [
        {
          path: "/login",
          element: <Login />,
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
