import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../logo/Logo";
import { myNavLinks } from "../../data/myNavLinks";
import { nanoid } from "nanoid";

const MyNav = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary mb-5 shadow-lg p-1"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {myNavLinks.map((links) => (
              <Nav.Link key={nanoid()} href={links.href}>
                {links.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
