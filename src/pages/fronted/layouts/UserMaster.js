import React from 'react'
//react router
import { Outlet} from "react-router-dom";
import UserNav from './UserNav.js'
// const UserNav = lazy(()=>import("./UserNav.js"))


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