import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Container className="sticky-top">
      <Navbar className="mt-4 py-3" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="fw-bold fs-4">
            <Link className="text-black text-decoration-none" to="/">
              CHEF <span className="text-warning">SPECIAL</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-3 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="ms-3 fs-6 fw-semibold" href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className="ms-3 fs-6 fw-semibold" href="#action2">
                About Us
              </Nav.Link>
              <Nav.Link className="ms-3 fs-6 fw-semibold" href="#action3">
                Menu
              </Nav.Link>
              <Nav.Link className="ms-3 fs-6 fw-semibold" href="#action4">
                Blog
              </Nav.Link>
              <Nav.Link className="ms-3 fs-6 fw-semibold" href="#action5">
                Contact
              </Nav.Link>
              <NavDropdown
                className="ms-3 fs-6 fw-semibold"
                title="Link"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex gap-3 align-items-center">
              <FaSearch className="fs-5" />
              <FaShoppingCart className="fs-5" />
              <FaUser className="fs-5" />
              <Link to="/login">
                <Button variant="warning">Login</Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
