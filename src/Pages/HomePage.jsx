import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { cartContext } from "../App";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, setCartItems, showModal, setShowModal } =
    useContext(cartContext);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  const buttonClick = (item) => {
    if (cartItems.includes(item)) {
      toast.warn("Item already added to cart!");
    } else {
      setCartItems([...cartItems, item]);
      toast.success("Item added to cart!");
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "20px",
        paddingTop: "30px",
        paddingLeft: "30px",
      }}
    >
      {products.map((item) => (
        <MDBCard key={item.id} style={{ height: "450px", width: "260px" }}>
          <MDBCardImage
            style={{ height: "300px", width: "100%" }}
            src={item.images[0]}
            position="top"
            alt="..."
          />
          <MDBCardBody style={{ textAlign: "center" }}>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardText>Price: {item.price}</MDBCardText>

            <MDBBtn
              color="warning"
              className="mx-6"
              style={{ color: "white", backgroundColor: "#A0C49D" }}
              onClick={() => buttonClick(item)}
            >
              Add to Cart
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      ))}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default HomePage;
