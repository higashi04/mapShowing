import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { GrBus, GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { Outlet } from "react-router-dom";

const Navibar = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="navib">
        <Container>
          <Navbar.Brand href="#home">
            <GrBus />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Contacto</Nav.Link>
              <Nav.Link href="#link">Quiénes Somos</Nav.Link>
              <Nav.Link href="https://www.facebook.com/TranspoVillareal2022"><BsFacebook /></Nav.Link>
              <Nav.Link href="#"><GrInstagram /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
};
export default Navibar;
