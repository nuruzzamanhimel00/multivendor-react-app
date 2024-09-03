import React from 'react'

import {getToken} from '../../helpers/AllHelpers.js'

import { useLoaderData, Navigate } from "react-router-dom";

import {httpRequest} from '../../services/AllServices.js'
import {authUserUrl} from "../../helpers/apiRoutes/index.js"

export const loader = async () => {
    let token = getToken();
    if (!token) return <Navigate to="/admin/login" replace={true} />;
    return await httpRequest({
      url: authUserUrl,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return "";
      });
  };
const ProtectedRoute = ({element}) => {
    const loaderData = useLoaderData();
    // console.log('loaderData',loaderData)
    if(!loaderData.hasOwnProperty("name")){
        return <Navigate to="/admin/login" />
    }
    return element;


    
}

export default ProtectedRoute;