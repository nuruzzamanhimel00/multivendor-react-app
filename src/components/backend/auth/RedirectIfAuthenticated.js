import React from 'react'
import {httpRequest} from "../../../services/AllServices.js"
import {authUserUrl} from "../../../helpers/apiRoutes/index.js"

//helpers
import {getToken} from '../../../helpers/AllHelpers.js'

//react router
import { useLoaderData } from "react-router-dom";
import { Navigate } from 'react-router-dom';

export const loader = async () => {
    let token = getToken();
  
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
        return {
            response: response,
            token
        };
        // console.log("loader result", response);
      })
      .catch((error) => {
        return "";
      });
  };

const RedirectIfAuthenticated  = ({element}) =>{
    const loaderData = useLoaderData();
  
    if(loaderData.response && loaderData.response.hasOwnProperty("name") && ['admin','seller'].includes(  loaderData.response.user_type)){
        return <Navigate to="/admin/dashboard" />
    }else if(loaderData.response && loaderData.response.hasOwnProperty("name") && ['user'].includes(  loaderData.response.user_type)){
      return <Navigate to="/" />
    }
    return element
}

export default RedirectIfAuthenticated;