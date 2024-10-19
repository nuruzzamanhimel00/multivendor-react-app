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

  import Login from "../pages/backend/auth/Login.js";
  //admin panel

  import AdminMaster from "../pages/backend/layouts/AdminMaster.js";
  import RedirectIfAuthenticated from "../components/backend/auth/RedirectIfAuthenticated.js";  
  import ProtectedRoute from "../components/backend/auth/ProtectedRoute.js";  
  import Dashboard from "../pages/backend/Dashboard.js";  
  import About from "../pages/backend/About.js";  
  // import Register from "../pages/backend/auth/Register.js"; 
  import OrderList from '../pages/backend/orders/OrderList.js' 
  import CategoryList from '../pages/backend/categories/CategoryList.js' 

  //user
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
    // {
    //     path: "/admin/register",
    //     element: <RedirectIfAuthenticated element={<Register />} />,
    //     loader: LoginLoader
    // },
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
          path: "orders",
          element: <OrderList />,
        },
        {
          path: "categories",
          element: <CategoryList />,
        },
        {
          path: "about",
          element: <About />,
        },
      ]
    },
  ]);


  export default  router;