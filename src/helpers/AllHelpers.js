// import {NProgress} from "./global-files.js"
import AllNavs from "../configs/AllNavs.js"
export function makeQueryStringUrl(_URL, object) {
  const url = new URL(_URL);
  Object.keys(object).forEach((key) => {
    if (key === "filters") {
      url.searchParams.append(key, JSON.stringify(object[key]));
    } else {
      url.searchParams.append(key, object[key]);
    }
  });
  return url;
}

// export function nagigateComponent(navigate,url) {
//   //react router

//   NProgress.start();
//   setTimeout(() => {
//     NProgress.done();
//     navigate(url)
//   }, 1000);
// }


export function getToken(){
    return localStorage.getItem("auth_token")
}

export function removeToken(){
     localStorage.removeItem("auth_token")
}

export function setToken(userToken) {
    localStorage.setItem("auth_token", userToken);
    // localStorage.setItem("auth_token", JSON.stringify(userToken).replace(/"/g, ""));
  }
  export function getNav(user_type, prevItems){
    const newNavs = AllNavs.filter(nav => 
      nav.user_type === user_type && !prevItems.some(item => item.id === nav.id)
    );
    return newNavs;
  }