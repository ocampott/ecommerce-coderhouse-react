import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CartWidget } from "./CartWidget";

export const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Libreria Baltimore</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Sobre nosotros</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
          <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
