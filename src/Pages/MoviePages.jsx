import React from "react";
import { imageUrl } from "../URL/Url";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import Footer from "../Header/Footer";
import { useEffect } from "react";
import { useState } from "react";
import MovieCarousel from "./MovieCarousel";
import Banner from "./Banner";

const MoviePages = (props) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get(props.apiURL).then((res) => setItem(res.data.results));
  }, [props.apiURL]);

  return (
    <div>
      {/* -----------------------------Carousel ------------------------------*/}
      <div>
        {/* <MovieCarousel apiURL={props.apiURL} /> */}
        <Banner apiURL={props.apiURL} />
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
          {props.name}
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
                style={{ height: "300px", width: "100%" }}
                src={imageUrl + items.backdrop_path}
                position="top"
                alt="..."
              />
              <MDBCardBody style={{ textAlign: "center" }}>
                <MDBCardTitle>{items.title || items.name}</MDBCardTitle>
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

export default MoviePages;
