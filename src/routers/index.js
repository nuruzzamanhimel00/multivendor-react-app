import {
    createBrowserRouter,
  } from "react-router-dom";

  //import component
  import TestComponent from "../pages/TestComponent.js";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TestComponent />,
    },
  ]);


  export default  router;