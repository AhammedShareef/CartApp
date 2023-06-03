import React, { useContext, useEffect, useState } from "react";
import { Button, Figure } from "react-bootstrap";
import { LatestMoviesAPI, imageUrl } from "../URL/Url";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  IoHeartSharp,
  IoStarOutline,
  IoThumbsDownSharp,
  IoThumbsUpSharp,
} from "react-icons/io5";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import Footer from "../Header/Footer";
import { idContext } from "./MainPage";

const MovieInfo = (props) => {
  const { id, updatedId } = useContext(idContext);

  // const { id } = useParams();
  // const [item, setItem] = useState([]);
  console.log(id);
  useEffect(() => {
    {
    }
  }, []);

  return (
    <div>
      <div>
        <section>
          <div>
            <img
              style={{ height: "70vh", width: "100%" }}
              src={imageUrl + id.backdrop_path}
              alt=""
            />
          </div>

          <div className="MovieInfo-subdiv-2">
            <div style={{ borderRadius: "16px 16px 0px 0px" }}>
              <img
                style={{
                  height: "380px",
                  width: "300px",
                  borderRadius: "16px 16px 0px 0px",
                }}
                src={imageUrl + id.poster_path}
                alt=""
              />
            </div>

            <div
              style={{
                paddingLeft: "30px",
                paddingTop: "50px",
                color: "white",
              }}
            >
              <h1 style={{ fontSize: "50px" }}>{id.name || id.title}</h1>
              <div>
                <h1 style={{ fontSize: "30px" }}>
                  Rating: {id.vote_average}/10
                </h1>
              </div>
              <div style={{ display: "flex" }}>
                <h3 style={{ fontSize: "30px" }}>ID: {id.id} </h3> &nbsp;&nbsp;
                &nbsp;
                <h3 style={{ fontSize: "30px" }}>
                  Language: {id.original_language}
                </h3>
              </div>
              <div style={{ display: "flex" }}>
                <h3 style={{ fontSize: "30px" }}>
                  Release Date: {id.release_date || id.first_air_date}
                </h3>
              </div>
              <div>
                <Button variant="warning">Watch Now</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ----------------------about the movie ----------------------------------*/}
      <section style={{ paddingTop: "100px" }}>
        <div style={{ color: "black", textAlign: "center" }}>
          <h1 style={{ color: "#227C70" }}>About the Movie</h1>
        </div>
        <div style={{ paddingTop: "30px" }}>
          <p
            style={{ paddingLeft: "20px", textAlign: "left", fontSize: "20px" }}
          >
            {id.overview}
          </p>
        </div>
      </section>
      {/* ----------------------movie casts------------------------------------- */}
      <section style={{ paddingTop: "50px" }}>
        <div style={{ color: "black", textAlign: "center" }}>
          <h1 style={{ color: "#227C70" }}>Movie Cast</h1>
        </div>
        <div
          style={{ marginLeft: "100px", display: "flex", paddingTop: "40px" }}
        >
          <div>
            <Figure style={{ alignItems: "center" }}>
              <div
                style={{
                  width: "170px",
                  height: "170px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://resizing.flixster.com/LumPRA7tw5a4VtKzSnGnTWpW2Q8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNTlmOGIyM2ItMzRhMy00MjdkLThkNDYtZWJkZDI1ODMzNmI3LmpwZw=="
                />
              </div>
              <h1
                style={{
                  color: "#D61355",
                  fontSize: "20px",
                  paddingTop: "15px",
                  textAlign: "center",
                }}
              >
                Name
              </h1>
            </Figure>
          </div>
          <div>
            <Figure style={{ alignItems: "center", paddingLeft: "180px" }}>
              <div
                style={{
                  width: "170px",
                  height: "170px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://hips.hearstapps.com/hmg-prod/images/jenna-ortega-emma-myers-wednesday-1669382193.jpg?crop=0.450xw:0.893xh;0.446xw,0&resize=1200:*"
                />
              </div>
              <h1
                style={{
                  color: "#D61355",
                  fontSize: "20px",
                  paddingTop: "15px",
                  textAlign: "center",
                }}
              >
                Name
              </h1>
            </Figure>
          </div>
          <div>
            <Figure style={{ alignItems: "center", paddingLeft: "180px" }}>
              <div
                style={{
                  width: "170px",
                  height: "170px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://www.pluggedin.com/wp-content/uploads/2022/11/wednesday.jpg"
                />
              </div>
              <h1
                style={{
                  color: "#D61355",
                  fontSize: "20px",
                  paddingTop: "15px",
                  textAlign: "center",
                }}
              >
                Name
              </h1>
            </Figure>
          </div>
          <div>
            <Figure style={{ alignItems: "center", paddingLeft: "180px" }}>
              <div
                style={{
                  width: "170px",
                  height: "170px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://images.hola.com/us/images/0278-15f41023d13d-77be27e8cbce-1000/horizontal-1200/2022-mtv-movie-amp-tv-awards-red-carpet.jpg"
                />
              </div>
              <h1
                style={{
                  color: "#D61355",
                  fontSize: "20px",
                  paddingTop: "15px",
                  textAlign: "center",
                }}
              >
                Name
              </h1>
            </Figure>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------movieinfo review box--------------------------------------------- */}

      <section style={{ paddingTop: "20px" }}>
        <div
          style={{ color: "black", textAlign: "center", paddingTop: "10px" }}
        >
          <h1 style={{ color: "#227C70" }}>Reviews</h1>
        </div>
        <div style={{ display: "flex", paddingLeft: "78px" }}>
          <div>
            <MDBCard style={{ width: "400px" }}>
              <MDBCardBody>
                <MDBCardTitle style={{ color: "#2F0F5D" }}>
                  Reviewer Name
                </MDBCardTitle>{" "}
                <div style={{ color: "#FF6000" }}>
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                </div>
                <MDBCardText>
                  write review here write review here write review here write
                  review here write review here write review here write review
                  here
                </MDBCardText>
                <div>
                  <IoHeartSharp style={{ color: "red" }} />{" "}
                  <IoThumbsUpSharp style={{ color: "#2F0F5D" }} />{" "}
                  <IoThumbsDownSharp style={{ color: "#2F0F5D" }} />
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div style={{ paddingLeft: "40px" }}>
            <MDBCard style={{ width: "400px" }}>
              <MDBCardBody>
                <MDBCardTitle style={{ color: "#2F0F5D" }}>
                  Reviewer Name
                </MDBCardTitle>{" "}
                <div style={{ color: "#FF6000" }}>
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                </div>
                <MDBCardText>
                  write review here write review here write review here write
                  review here write review here write review here write review
                  here
                </MDBCardText>
                <div>
                  <IoHeartSharp style={{ color: "red" }} />{" "}
                  <IoThumbsUpSharp style={{ color: "#2F0F5D" }} />{" "}
                  <IoThumbsDownSharp style={{ color: "#2F0F5D" }} />
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div style={{ paddingLeft: "40px" }}>
            <MDBCard style={{ width: "400px" }}>
              <MDBCardBody>
                <MDBCardTitle style={{ color: "#2F0F5D" }}>
                  Reviewer Name
                </MDBCardTitle>{" "}
                <div style={{ color: "#FF6000" }}>
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                </div>
                <MDBCardText>
                  write review here write review here write review here write
                  review here write review here write review here write review
                  here
                </MDBCardText>
                <div>
                  <IoHeartSharp style={{ color: "red" }} />{" "}
                  <IoThumbsUpSharp style={{ color: "#2F0F5D" }} />{" "}
                  <IoThumbsDownSharp style={{ color: "#2F0F5D" }} />
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>

        <div
          style={{ display: "flex", paddingLeft: "78px", paddingTop: "50px" }}
        >
          <div>
            <MDBCard style={{ width: "400px" }}>
              <MDBCardBody>
                <MDBCardTitle style={{ color: "#2F0F5D" }}>
                  Reviewer Name
                </MDBCardTitle>{" "}
                <div style={{ color: "#FF6000" }}>
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                </div>
                <MDBCardText>
                  write review here write review here write review here write
                  review here write review here write review here write review
                  here
                </MDBCardText>
                <div>
                  <IoHeartSharp style={{ color: "red" }} />{" "}
                  <IoThumbsUpSharp style={{ color: "#2F0F5D" }} />{" "}
                  <IoThumbsDownSharp style={{ color: "#2F0F5D" }} />
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div style={{ paddingLeft: "40px" }}>
            <MDBCard style={{ width: "400px" }}>
              <MDBCardBody>
                <MDBCardTitle style={{ color: "#2F0F5D" }}>
                  Reviewer Name
                </MDBCardTitle>{" "}
                <div style={{ color: "#FF6000" }}>
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                </div>
                <MDBCardText>
                  write review here write review here write review here write
                  review here write review here write review here write review
                  here
                </MDBCardText>
                <div>
                  <IoHeartSharp style={{ color: "red" }} />{" "}
                  <IoThumbsUpSharp style={{ color: "#2F0F5D" }} />{" "}
                  <IoThumbsDownSharp style={{ color: "#2F0F5D" }} />
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div style={{ paddingLeft: "40px" }}>
            <MDBCard style={{ width: "400px" }}>
              <MDBCardBody>
                <MDBCardTitle style={{ color: "#2F0F5D" }}>
                  Reviewer Name
                </MDBCardTitle>{" "}
                <div style={{ color: "#FF6000" }}>
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                </div>
                <MDBCardText>
                  write review here write review here write review here write
                  review here write review here write review here write review
                  here
                </MDBCardText>
                <div>
                  <IoHeartSharp style={{ color: "red" }} />{" "}
                  <IoThumbsUpSharp style={{ color: "#2F0F5D" }} />{" "}
                  <IoThumbsDownSharp style={{ color: "#2F0F5D" }} />
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </section>
      {/* -----------------------------------footer -------------------------------------------*/}
      <div style={{ paddingTop: "70px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default MovieInfo;
