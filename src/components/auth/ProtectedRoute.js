import React from 'react'

import {getToken} from '../../helpers/AllHelpers.js'

import { useLoaderData, Navigate } from "react-router-dom";

import {httpRequest} from '../../services/AllServices.js'
import {authUserUrl} from "../../helpers/apiRoutes/index.js"

//react redux
import { useDispatch } from 'react-redux';
import {setLoginData} from '../../store/backend/auth-slice.js'

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
        return {
          token,
          response
        }
        // return response;
      })
      .catch((error) => {
        return "";
      });
  };
const ProtectedRoute = ({element}) => {
    const {token, response} = useLoaderData();
    const dispatch = useDispatch()
    // console.log('loaderData',loaderData)
    if(!response.hasOwnProperty("name")){
        return <Navigate to="/admin/login" />
    }
    //admin token store
    dispatch(setLoginData({
      token: token,
              user: response,
    }))

    return element;


    
}

export default ProtectedRoute;