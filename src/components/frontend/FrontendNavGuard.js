
import {getToken} from '../../helpers/AllHelpers.js'
import {httpRequest} from '../../services/AllServices.js'
import {authUserUrl} from '../../helpers/apiRoutes/index.js'
import { useLoaderData } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {setLoginData} from "../../store/backend/auth-slice.js"
import {resetAuthData} from '../../store/backend/auth-slice.js'

export const loader = async () => {
    let token = getToken();
    if(!token){
        return {
            token: null,
            response: null
        }
    }
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
const FrontendNavGuard = ({element}) =>{
    const {token, response} = useLoaderData();
    const dispatch = useDispatch()
    if(token !== null && response !== null){
        dispatch(setLoginData({
            token: token,
                    user: response,
          }))
    }else{
        dispatch(resetAuthData())
    }
    return element;
}

export default FrontendNavGuard;