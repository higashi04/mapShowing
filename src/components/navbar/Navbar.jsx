import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { GrBus, GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

const Navibar = () => {
  const [scroll, setScroll] = useState(false);
  const changeNavbarColor = () =>{
    if(window.scrollY >= 80){
      setScroll(true);
    }
    else{
      setScroll(false);
    }
 };
 window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      <Navbar expand="lg" fixed="top" className={scroll ? "navib navbar-light bg-light" : "navib navbar-light"} >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              {" "}
              <GrBus />{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="contacto">Contacto</Nav.Link>
              <Nav.Link href="about">Quiénes Somos</Nav.Link>
              <Nav.Link href="vacantes">Vacantes</Nav.Link>
              <Nav.Link href="https://www.facebook.com/TranspoVillareal2022">
                <BsFacebook />
              </Nav.Link>
              <Nav.Link href="#">
                <GrInstagram />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};
export default Navibar;
