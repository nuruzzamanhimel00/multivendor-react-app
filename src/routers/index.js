import {
    createBrowserRouter,
  } from "react-router-dom";

  //import component
  import TestComponent from "../pages/TestComponent.js";

  import AdminLogin from "../pages/backend/auth/AdminLogin.js";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TestComponent />,
    },
    {
        path: "/admin/login",
        element: <AdminLogin />,
    
      },
  ]);


  export default  router;