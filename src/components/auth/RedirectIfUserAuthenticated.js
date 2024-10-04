import React from 'react'
import {httpRequest} from "../../services/AllServices.js"
import {authUserUrl} from "../../helpers/apiRoutes/index.js"

//helpers
import {getToken} from '../../helpers/AllHelpers.js'

//react router
import { useLoaderData } from "react-router-dom";
import { Navigate } from 'react-router-dom';

export const loader = async () => {
    let token = getToken();
    if(token == null){
      return {
        response: null,
        token: null
      }
    }
    console.log('get toekn',token)
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
    const {token, response} = useLoaderData();
  
    if(token !== null && response.hasOwnProperty("name")){
        return <Navigate to="/" />
    }
    return element
}

export default RedirectIfAuthenticated;