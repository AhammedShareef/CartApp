import React from "react";
import Header from "../Header/Header";
import { Button, Figure } from "react-bootstrap";
import { LatestMoviesAPI } from "../URL/Url";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const MovieInfo = () => {
  const [item, setitem] = useState([]);
  useEffect(() => {
    axios.get(LatestMoviesAPI).then((res) => setitem(res.data.results));
    console.log(item);
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <section>
          <div>
            <img
              style={{ height: "70vh", width: "100%" }}
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_SEpafwT9QfE8B59ajN4uSaeQOUfwCcZ57IziJMld4EiKwzGWpCJqFqdHN7u3Va7Njalch26susAJaa_c_JZDRJuVqLHnqccMMwJajn1_ePulVQHDxO5VI9DpWLB0jO9qFrQOedhRGS3BUtwYJtAeQeYYQv8_L_swL41wJOvvBBwCxJdlsGbAxyD84w/s1280/20230226_175755.jpg"
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
                src="https://m.media-amazon.com/images/M/MV5BNTZiN2Y3NTItZDJiNS00Y2FhLWFlZjAtOGJkNDMzZjlmNjE3XkEyXkFqcGdeQXVyMTE4OTYyNjkx._V1_.jpg"
                alt=""
              />
            </div>
            <div style={{ paddingLeft: "30px", color: "white" }}>
              <h1 style={{ fontSize: "70px" }}>Film Name</h1>
              <div>
                <h1>Rating</h1>
              </div>
              <div style={{ display: "flex" }}>
                <h3>3D</h3>
                <h3>Language</h3>
              </div>
              <div style={{ display: "flex" }}>
                <h3>Duration</h3>
                <h3>Date</h3>
              </div>
              <div>
                <Button variant="warning">Watch Now</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section style={{ paddingTop: "100px" }}>
        <div style={{ color: "yellow", textAlign: "center" }}>
          <h1>About Movie</h1>
        </div>
        <div>
          <div>
            <Figure style={{ display: "flex" }}>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="https://m.media-amazon.com/images/M/MV5BNTZiN2Y3NTItZDJiNS00Y2FhLWFlZjAtOGJkNDMzZjlmNjE3XkEyXkFqcGdeQXVyMTE4OTYyNjkx._V1_.jpg"
              />
              <Figure.Caption style={{ color: "white" }}>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </div>
          <div>
            <Figure style={{ display: "flex" }}>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="https://m.media-amazon.com/images/M/MV5BNTZiN2Y3NTItZDJiNS00Y2FhLWFlZjAtOGJkNDMzZjlmNjE3XkEyXkFqcGdeQXVyMTE4OTYyNjkx._V1_.jpg"
              />
              <Figure.Caption style={{ color: "white" }}>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </div>
          <div style={{ alignItems: "end" }}>
            <Figure style={{ display: "flex" }}>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="https://m.media-amazon.com/images/M/MV5BNTZiN2Y3NTItZDJiNS00Y2FhLWFlZjAtOGJkNDMzZjlmNjE3XkEyXkFqcGdeQXVyMTE4OTYyNjkx._V1_.jpg"
              />
              <Figure.Caption style={{ color: "white" }}>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieInfo;
