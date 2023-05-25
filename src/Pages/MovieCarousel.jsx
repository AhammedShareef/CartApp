import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { imageUrl } from "../URL/Url";

const MovieCarousel = (props) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get(props.apiURL).then((res) => setItem(res.data.results));
  }, [props.apiURL]);
  console.log(item);
  return (
    <div>
      <Carousel>
        {item.map((items) => (
          <Carousel.Item
            style={{
              height: "90vh",
              width: "100%",
              backgroundSize: "100% 100%",
            }}
          >
            <img
              className="d-block w-100"
              src={imageUrl + items.backdrop_path}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 style={{ color: "#FFD93D", fontSize: "60px" }}>
                {items.title || items.name}
              </h1>
              <h2>Watch Now</h2>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
