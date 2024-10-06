import React,{useEffect, useState} from 'react'
import { NavLink } from "react-router-dom";
import {getNav} from '../../../helpers/AllHelpers.js'
const SideBar = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    // Use a functional update to access the previous state of `items`
    setItems(prevItems => {
      // Filter the new navs that are not already in `prevItems`
      const newNavs = getNav('admin',prevItems);
      // Return a new array with both previous and new items
      return [...prevItems, ...newNavs];
    });
  }, []); // Empty dependency array, since we're using functional updates
  

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
    </ul>
  );

  return <>{Menues}</>;
};

export default SideBar;
