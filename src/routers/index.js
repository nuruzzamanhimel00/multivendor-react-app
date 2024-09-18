import {
    createBrowserRouter,Navigate
  } from "react-router-dom";


  //import component
  import TestComponent from "../pages/TestComponent.js";

  import Login from "../pages/backend/auth/Login.js";

  //admin panel
  import AdminLayout from '../pages/backend/layouts/AdminLayout.js'

  //component
  import {loader as LoginLoader} from "../components/auth/RedirectIfAuthenticated.js"
  import {loader as ProtectedRouteLoader} from "../components/auth/ProtectedRoute.js"
  import RedirectIfAuthenticated from "../components/auth/RedirectIfAuthenticated.js"
  import ProtectedRoute from "../components/auth/ProtectedRoute.js"
  import Dashboard from '../pages/backend/Dashboard.js'
  import About from '../pages/backend/About.js'
import Register from "../pages/backend/auth/Register.js";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TestComponent />,
    },
    {
        path: "/admin/login",
        element: <RedirectIfAuthenticated element={<Login />} />,
        // element: <Login />,
        loader: LoginLoader
    },
    {
        path: "/admin/register",
        element: <RedirectIfAuthenticated element={<Register />} />,
        // element: <Login />,
        loader: LoginLoader
    },
    {
      path: "/admin",
      element: <ProtectedRoute element={<AdminLayout />} />,
      loader: ProtectedRouteLoader,
      children:[
        {
          index: true,
          element: <Navigate to="dashboard" replace />,
          // element: <Dashboard />,
        },
  
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "about",
          element: <About />,
        },
      ]
    },
  ]);


  export default  router;