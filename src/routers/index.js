// import {lazy} from 'react'
import {
    createBrowserRouter,Navigate
  } from "react-router-dom";

//component
import {loader as LoginLoader} from "../components/backend/auth/RedirectIfAuthenticated.js"
import {loader as ProtectedRouteLoader} from "../components/backend/auth/ProtectedRoute.js"
import {loader as FrontendNavGuardLoader} from "../components/frontend/FrontendNavGuard.js"
//user
import {loader as UserLoginLoader} from "../components/auth/RedirectIfUserAuthenticated.js"
  //import component
  // import TestComponent from "../pages/TestComponent.js";

  import Login from "../pages/backend/auth/Login.js";
  // const Login = lazy(()=>import("../pages/backend/auth/Login.js"))


  //admin panel
  // const AdminMaster = lazy(()=>import("../pages/backend/layouts/AdminMaster.js"))
  import AdminMaster from "../pages/backend/layouts/AdminMaster.js";
  
  // const RedirectIfAuthenticated = lazy(()=>import("../components/backend/auth/RedirectIfAuthenticated.js"))
  // const ProtectedRoute = lazy(()=>import("../components/backend/auth/ProtectedRoute.js"))
  // const Dashboard = lazy(()=>import("../pages/backend/Dashboard.js"))
  // const About = lazy(()=>import("../pages/backend/About.js"))
  // const Register = lazy(()=>import("../pages/backend/auth/Register.js"))

  import RedirectIfAuthenticated from "../components/backend/auth/RedirectIfAuthenticated.js";  
  import ProtectedRoute from "../components/backend/auth/ProtectedRoute.js";  
  import Dashboard from "../pages/backend/Dashboard.js";  
  import About from "../pages/backend/About.js";  
  import Register from "../pages/backend/auth/Register.js";  


  //user
  // const RedirectIfUserAuthenticated = lazy(()=>import("../components/auth/RedirectIfUserAuthenticated.js"))
  // const UserLogin = lazy(()=>import("../pages/fronted/auth/UserLogin.js"))
  // const UserRegister = lazy(()=>import("../pages/fronted/auth/UserRegister.js"))
  // const UserMaster = lazy(()=>import("../pages/fronted/layouts/UserMaster.js"))
  // const Home = lazy(()=> import('../pages/fronted/Home.js'))
  // const FrontendNavGuard = lazy(()=>import("../components/frontend/FrontendNavGuard.js"))

  import RedirectIfUserAuthenticated from "../components/auth/RedirectIfUserAuthenticated.js";  
  import UserLogin from "../pages/fronted/auth/UserLogin.js";  
  import UserRegister from "../pages/fronted/auth/UserRegister.js";  
  import UserMaster from "../pages/fronted/layouts/UserMaster.js";  
 
  import Home from "../pages/fronted/Home.js";  
  import FrontendNavGuard from "../components/frontend/FrontendNavGuard.js";  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontendNavGuard element={<UserMaster />} /> ,
      loader: FrontendNavGuardLoader,
      children:[
        {
          index: true,
          element: <Home />,
          // element: <Dashboard />,
        },
        
      ]
    },
    {
      path: "/login",
      element: <RedirectIfUserAuthenticated element={<UserLogin />} />,
      loader: UserLoginLoader
  },
    {
      path: "/register",
      element: <RedirectIfUserAuthenticated element={<UserRegister />} />,
      loader: LoginLoader
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
      element: <ProtectedRoute element={<AdminMaster />} />,
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