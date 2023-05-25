import React from "react";
import { PopularMoviesAPI, imageUrl } from "../URL/Url";
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

const PopularMovies = () => {
  const [item, setItem] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get(PopularMoviesAPI).then((res) => setItem(res.data.results));
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
              src="https://occ-0-37-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUI0milkCN6Rwo9T0Y-egbpiayrdZUlcE14lLZtgf2GjZbCzjWWUN4d6WV8JeTagrwSyXldt5dZ3UvnYluPNqQgaL2KbDvzTzecs.jpg?r=798"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 style={{ color: "#FFD93D" }}>The Next 365 Days</h1>
              <h4>Watch Now</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "300px", width: "100%" }}>
            <img
              className="d-block w-100"
              src="https://static01.nyt.com/images/2023/01/25/multimedia/shotgun1-kmvc/shotgun1-kmvc-videoSixteenByNine3000.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1 style={{ color: "#FFD93D" }}>Shotgun Wedding</h1>
              <h4>Watch Now</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "300px", width: "100%" }}>
            <img
              className="d-block w-100"
              src="https://occ-0-38-444.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABW6Pejj-kBNF8M6Jla5grEJ_80QaoVjFSjBFpYQoSuaB37A87uy_bFZIfuE_3Qfc0Ex-nKSvtBp_vOzNhXGFvyyaltYMKg9JW1n5.jpg?r=60b"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 style={{ color: "#FFD93D" }}>
                Royalteen: Princess Margrethe
              </h1>
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
          marginTop: "10px",
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
                src={imageUrl + items.backdrop_path}
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

export default PopularMovies;
