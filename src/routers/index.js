import {lazy} from 'react'
import {
    createBrowserRouter,Navigate
  } from "react-router-dom";

//component
import {loader as LoginLoader} from "../components/backend/auth/RedirectIfAuthenticated.js"
import {loader as ProtectedRouteLoader} from "../components/backend/auth/ProtectedRoute.js"
//user
import {loader as UserLoginLoader} from "../components/auth/RedirectIfUserAuthenticated.js"
  //import component
  import TestComponent from "../pages/TestComponent.js";

  // import Login from "../pages/backend/auth/Login.js";
  const Login = lazy(()=>import("../pages/backend/auth/Login.js"))

  //admin panel
  const AdminLayout = lazy(()=>import("../pages/backend/layouts/AdminLayout.js"))

  
  const RedirectIfAuthenticated = lazy(()=>import("../components/backend/auth/RedirectIfAuthenticated.js"))
  const ProtectedRoute = lazy(()=>import("../components/backend/auth/ProtectedRoute.js"))
  const Dashboard = lazy(()=>import("../pages/backend/Dashboard.js"))
  const About = lazy(()=>import("../pages/backend/About.js"))
  const Register = lazy(()=>import("../pages/backend/auth/Register.js"))

  //user
  const RedirectIfUserAuthenticated = lazy(()=>import("../components/auth/RedirectIfUserAuthenticated.js"))
  const UserLogin = lazy(()=>import("../pages/fronted/auth/UserLogin.js"))


  const router = createBrowserRouter([
    {
      path: "/",
      element: <TestComponent />,
    },
    {
      path: "/login",
      element: <RedirectIfUserAuthenticated element={<UserLogin />} />,
      loader: UserLoginLoader
  },
    {
        path: "/admin/login",
        element: <RedirectIfAuthenticated element={<Login />} />,
        loader: LoginLoader
    },
    {
        path: "/admin/register",
        element: <RedirectIfAuthenticated element={<Register />} />,
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