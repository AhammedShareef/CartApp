import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoMdCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CartModal from "../Pages/CartModal";
import { useContext } from "react";
import { cartContext } from "../App";

const NavBar = () => {
  const { showModal, setShowModal, cartItems, setCartItems } =
    useContext(cartContext);
  const nav = useNavigate();

  const cartClick = () => {
    nav("/cartmodal");
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: "#A0C49D" }} expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: "25px" }}>
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/template-3/shopping-cart-94.png"
              alt="Logo"
              height="40"
              width="40"
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />{" "}
            Shoppy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{ fontSize: "20px", paddingLeft: "20px" }}
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
            </Nav>
            <Nav>
              <IoMdCart
                onClick={cartClick}
                style={{ fontSize: "30px", color: "#090580" }}
              />
            </Nav>
            <nav style={{ paddingBottom: "20px" }}>
              <Badge bg="danger">{cartItems.length}</Badge>
            </nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
