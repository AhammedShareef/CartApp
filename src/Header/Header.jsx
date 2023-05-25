import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, useNavigation } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
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
                onClick={() => nav("/popularmovies")}
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
                onClick={() => nav("/latestmovies")}
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
                onClick={() => nav("/comedymovies")}
              >
                Comedy Movies
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
