import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

import { Link as RouterLink } from "react-router-dom";

const Links = [
  // { path: "/", title: "Home" },
  // { path: "/buy", title: "Buy" },
  { path: "/booking", title: "Booking" },
  // { path: "/sign", title: "Sign-up" },
];

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="Nav-Main">
      <Container fluid>
        <RouterLink to={"/"} style={{ textDecoration: "none" }}>
          <Navbar.Brand>BookMyMovie.we</Navbar.Brand>
        </RouterLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            s
            navbarScroll
          >
            <Nav.Link className="Navlinks">
              <RouterLink className="Navlinks" to={"/booking"}>
                Cart
              </RouterLink>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="search-bar">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
