import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "primereact/button";
//react redux
import { useDispatch, useSelector } from "react-redux";
import {toggleSidebar} from '../../../store/backend/all-slice.js'
import {resetAuthData} from '../../../store/backend/auth-slice.js'

//services
import {httpRequest} from '../../../services/AllServices.js'
import {authLogoutUrl} from '../../../helpers/apiRoutes/index.js'
import {authHeaders} from '../../../helpers/AuthHelper.js'

// import {  useNavigate } from "react-router-dom";



//nprogress
import NProgress from "nprogress";

const TopBar = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)

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
        window.location.href = '/admin/login'
        // return navigate('/admin/login')
      }).catch((error) =>{
        NProgress.done();
        console.log('errors', error)
      })
    
  }

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home" style={{ display: "flex" }}>
            Admin Panel
            <Button link onClick={() => {
              dispatch(toggleSidebar())
            } } >
              <i className="pi pi-bars"></i>
            </Button>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown
                title={user.name}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1" onClick={logoutHandler} >
                  <i className="pi pi-sign-out"></i> Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
