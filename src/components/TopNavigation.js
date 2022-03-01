import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function TopNavigation() {
  return (
    <Navbar bg="light" expand="lg" className="px-2">
      {/* <Container> */}
      <Navbar.Brand href="/">website name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/gigs">Browse gigs</Nav.Link>
          <Nav.Item>
            <Button>Login</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}
