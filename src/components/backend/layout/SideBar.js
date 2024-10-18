import React,{useEffect, useState} from 'react'
import { NavLink } from "react-router-dom";
import {getNav} from '../../../helpers/AllHelpers.js'
//service
import {logoutRequestService} from '../../../services/AllServices.js'
//redux
import { useDispatch } from "react-redux";
import {resetAuthData} from '../../../store/backend/auth-slice.js'
import {addToaster} from '../../../store/toaster-slice.js'


//uuid
import { v4 as uuidv4 } from 'uuid';
const SideBar = () => {
  const [items, setItems] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    // Use a functional update to access the previous state of `items`
    setItems(prevItems => {
      // Filter the new navs that are not already in `prevItems`
      const newNavs = getNav('admin',prevItems);
      // Return a new array with both previous and new items
      return [...prevItems, ...newNavs];
    });
  }, []); // Empty dependency array, since we're using functional updates
  
  const logoutHandler = async (e) =>{
    e.preventDefault();
    logoutRequestService().then((response)=>{
      if(response){
        //login session remove and reset
          dispatch(resetAuthData())
          //redirect login page
          window.location.href = '/admin/login'
      }
    }).catch((error)=>{
      dispatch(addToaster(
        {id:uuidv4(),severity:'error', summary: 'Error', detail:error, life: 3000}
      ))
    })
  }

  const Menues = (
    <ul className="layout-menu">
      
      { items.map((item, key) => (
        <li className="layout-root-menuitem" key={key}>
          <div className="layout-menuitem-root-text">{item.label}</div>
          <a href="/">
            <i className="layout-menuitem-icon"></i>
            <span className="layout-menuitem-text">{item.label}</span>
            <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
          </a>

          <ul className="layout-submenu">
            {item.items.length > 0 &&
              item.items.map((sub_item, sub_item_key) => (
                <li key={sub_item_key}>
                  <NavLink
                    aria-current="page"
                    to={sub_item.to}
                    className="router-link-active router-link-exact-active active-route"
                  >
                    <i
                      className={`pi pi-fw ${sub_item.icon} layout-menuitem-icon`}
                    ></i>
                    <span className="layout-menuitem-text">
                      {sub_item.label}
                    </span>
                  </NavLink>
                </li>
              ))}
          </ul>
        </li>
      ))}
        <li className="layout-root-menuitem" >
        <div className="layout-menuitem-root-text">
          <a href="/" className="d-block"  onClick={logoutHandler}>
          <i className="pi pi-sign-out"></i> Logout
          </a>
        
        </div>
        </li>
      
    </ul>
  );

  return <>{Menues}</>;
};

export default SideBar;
