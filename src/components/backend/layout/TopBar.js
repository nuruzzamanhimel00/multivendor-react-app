import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "primereact/button";
//react redux
import { useDispatch, useSelector } from "react-redux";
import {toggleSidebar} from '../../../store/all-slice.js'
import {resetAuthData} from '../../../store/backend/auth-slice.js'
import {addToaster} from '../../../store/toaster-slice.js'

//bootstrap
import Image from 'react-bootstrap/Image';

//uuid
import { v4 as uuidv4 } from 'uuid';



//service
import {logoutRequestService} from '../../../services/AllServices.js'

const TopBar = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)

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
              <Nav.Link href="#">
                <button className="mt-1">
                <i className="text-2xl mb-3 text-color-secondary pi pi-envelope"></i>
                </button>
              </Nav.Link>
              <Nav.Link href="#">
                <Image src={user.avatar_url} fluid  thumbnail  width="30px" height="30px" />
              </Nav.Link>
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
