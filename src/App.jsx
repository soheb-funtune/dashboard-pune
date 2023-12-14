import { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Overview from "./components/dashboard-ovarview/Ovarview";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SideBar />,
      children: [
        {
          path: "",
          element: <Overview />,
        },
        {
          path: "project",
          element: <h1>Project</h1>,
        },
        {
          path: "settings",
          element: <h1>Settings</h1>,
        },
      ],
    },
  ]);

  return createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;
