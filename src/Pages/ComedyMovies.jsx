import React from "react";
import { ComedyMoviesAPI, imageUrl } from "../URL/Url";
import axios from "axios";
import { useState, useEffect } from "react";
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

const ComedyMovies = () => {
  const [item, setItem] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get(ComedyMoviesAPI).then((res) => setItem(res.data.results));
    axios.get(imageUrl);
  }, []);

  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item style={{ height: "300px", width: "100%" }}>
            <img
              className="d-block w-100"
              src="https://flxt.tmsimg.com/assets/p19900212_b_h8_ag.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 style={{ color: "#FFD93D" }}>Sweet Tooth</h1>
              <h4>Watch Now</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "300px", width: "100%" }}>
            <img
              className="d-block w-100"
              src="https://image.tmdb.org/t/p/w780/8LkcpnO8uuN7pvhl4mRQbn80KNv.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1 style={{ color: "#FFD93D" }}>Wednesday</h1>
              <h4>Watch Now</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "300px", width: "100%" }}>
            <img
              className="d-block w-100"
              src="https://www.cheatsheet.com/wp-content/uploads/2016/07/Stranger-Things.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 style={{ color: "#FFD93D" }}>Stranger Things</h1>
              <h4>Watch Now</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
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
                <MDBCardTitle>{items.name}</MDBCardTitle>
                <MDBCardText>Country : {items.origin_country}</MDBCardText>
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

export default ComedyMovies;
