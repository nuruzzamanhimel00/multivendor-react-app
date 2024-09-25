import React,{lazy} from 'react'
//react router
import { Outlet} from "react-router-dom";
const UserNav = lazy(()=>import("./UserNav.js"))


const UserMaster = () =>{

    return (
        <>
            {/* <!---- Nev Section ----> */}
            <UserNav/>
            <Outlet />
        </>
    );
}

export default UserMaster;