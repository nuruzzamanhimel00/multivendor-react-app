//nprogress
import NProgress from "nprogress";
//helpers
import {authLogoutUrl} from '../helpers/apiRoutes/index.js'
import {authHeaders} from '../helpers/AuthHelper.js'

export function httpRequest(requestConfig) {
  
    return new Promise(async (resolve, reject) => {
      return await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      })
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error));
    });
  }

  export function logoutRequestService(){
    return new Promise(async (resolve, reject) => {
      NProgress.start();
      return await httpRequest({
        url: authLogoutUrl,
        method: "POST",
        headers: authHeaders(),
        
        }).then((response) =>{
          NProgress.done();
          resolve(true)
        
        }).catch((error) =>{
          NProgress.done();
         reject(error)
        })
    });
  }
  