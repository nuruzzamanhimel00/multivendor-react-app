import {
    createBrowserRouter,
  } from "react-router-dom";

  //import component
  import TestComponent from "../pages/TestComponent.js";

  import AdminLogin from "../pages/backend/auth/AdminLogin.js";

  //admin panel
  import AdminLayout from '../pages/backend/layouts/AdminLayout.js'

  //component
  import {loader as AdminLoginLoader} from "../components/auth/RedirectIfAuthenticated.js"
  import RedirectIfAuthenticated from "../components/auth/RedirectIfAuthenticated.js"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TestComponent />,
    },
    {
        path: "/admin/login",
        element: <RedirectIfAuthenticated element={<AdminLogin />} />,
        // element: <AdminLogin />,
        loader: AdminLoginLoader
    },
    {
      path: "/admin/dashboard",
      element: <AdminLayout />,
    },
  ]);


  export default  router;