import React from "react";
import { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = ({ setSearch }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: "30px" }}>
            Movie World
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#features"
                style={{ color: "#FFD93D", fontSize: "17px" }}
                onClick={() => navigate("/popularmovies")}
              >
                Popular Movies
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                style={{
                  color: "#FFD93D",
                  fontSize: "17px",
                  paddingLeft: "30px",
                }}
                onClick={() => navigate("/latestmovies")}
              >
                Latest Movies
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                style={{
                  color: "#FFD93D",
                  fontSize: "17px",
                  paddingLeft: "30px",
                }}
                onClick={() => navigate("/comedymovies")}
              >
                Comedy Movies
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
