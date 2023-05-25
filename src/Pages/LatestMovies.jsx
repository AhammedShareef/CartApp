import React from "react";
import { LatestMoviesAPI, imageUrl } from "../URL/Url";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Carousel } from "react-bootstrap";
import Footer from "../Header/Footer";
import { useEffect } from "react";
import { useState } from "react";

const LatestMovies = () => {
  const [item, setItem] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get(LatestMoviesAPI).then((res) => setItem(res.data.results));
  }, []);
  console.log(item);
  return (
    <div>
      {/* -----------------------------Carousel ------------------------------*/}
      <div>
        <Carousel>
          <Carousel.Item style={{ height: "300px", width: "100%" }}>
            <img
              className="d-block w-100"
              src="https://filminformation.com/wp-content/uploads/2023/04/sisu-movie-jorma-tommila-social-feature.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 style={{ color: "#FFD93D" }}>SISU</h1>
              <h4>Watch Now</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "300px", width: "100%" }}>
            <img
              className="d-block w-100"
              src="https://www.koimoi.com/wp-content/new-galleries/2023/05/john-wick-chapter-4-box-office-reached-to-1-billion-mark-001.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1 style={{ color: "#FFD93D" }}>John Wick-Chapter 4</h1>
              <h4>Watch Now</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "300px", width: "100%" }}>
            <img
              className="d-block w-100"
              src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/08/The-Mother-Jennifer-Lopez-Netflix-Fall-2022.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 style={{ color: "#FFD93D" }}>The Mother</h1>
              <h4>Watch Now</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* ---------------------------------------------------header----------------------------- */}
      <div>
        <h3
          style={{
            textAlign: "center",
            textDecorationLine: "underline",
            textDecorationColor: "#E57C23",
            marginTop: "30px",
          }}
        >
          MOVIES
        </h3>
      </div>
      <br />
      {/* ------------------------------------------cards--------------------------------------- */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {item.map((items) => (
          <div
            style={{
              padding: "15px",
              alignItems: "center",
              marginLeft: "50px",
            }}
          >
            <MDBCard style={{ height: "450px", width: "260px" }}>
              <MDBCardImage
                style={{ height: "300px", width: "220px" }}
                src={items.poster_path}
                position="top"
                alt="..."
              />
              <MDBCardBody style={{ textAlign: "center" }}>
                <MDBCardTitle>{items.title}</MDBCardTitle>
                <MDBCardText>Language : {items.original_language}</MDBCardText>
                <MDBBtn
                  href="#"
                  color="warning"
                  className="mx-6"
                  style={{ color: "white" }}
                >
                  Watch Now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
      {/* ----------------------------------Footer--------------------------*/}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LatestMovies;
