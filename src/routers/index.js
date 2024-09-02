import {
    createBrowserRouter,
  } from "react-router-dom";

  //import component
  import TestComponent from "../pages/TestComponent.js";

  import AdminLogin from "../pages/backend/auth/AdminLogin.js";

  //admin panel
  import AdminLayout from '../pages/backend/layouts/AdminLayout.js'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TestComponent />,
    },
    {
        path: "/admin/login",
        element: <AdminLogin />,
    },
    {
      path: "/admin/dashboard",
      element: <AdminLayout />,
    },
  ]);


  export default  router;