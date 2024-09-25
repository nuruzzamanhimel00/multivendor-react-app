import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useSelector, useDispatch } from "react-redux";
import {resetAuthData} from "../../../store/backend/auth-slice.js"

import {httpRequest} from '../../../services/AllServices.js'
import {authLogoutUrl} from "../../../helpers/apiRoutes/index.js"
import {authHeaders} from "../../../helpers/AuthHelper.js"

//nprogress
import NProgress from "nprogress";
// import { useNavigate } from "react-router-dom";

const UserNav = () =>{

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const isAuth = useSelector((state) => state.auth.isAuth)
    console.log('isAuth',isAuth)
    const logoutHandler = async (e) =>{
        e.preventDefault();
          NProgress.start();
        await httpRequest({
          url: authLogoutUrl,
          method: "POST",
          headers: authHeaders(),
          
          }).then((response) =>{
            NProgress.done();
            //login session remove and reset
            dispatch(resetAuthData())
      
            //redirect login page
              window.location.href = '/login'
            // return navigate('/login')
          }).catch((error) =>{
            NProgress.done();
            console.log('errors', error)
          })
        
      }

      const dropdown = isAuth  ? 
        <NavDropdown title={user.name} id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                    
                        </NavDropdown> : ''
    

    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        {dropdown}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default UserNav;