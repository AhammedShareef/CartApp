import React, { useContext, useEffect, useState } from "react";
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
import { useNavigate, Link } from "react-router-dom";
import { idContext } from "./MainPage";
import { imageUrl } from "../URL/Url";
import Banner from "./Banner";

const MoviePages = (props) => {
  const { id, updatedId, setcurrentUrl, updatedBanner } = useContext(idContext);
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get(props.apiURL).then((res) => setItem(res.data.results));
    setcurrentUrl(props.apiURL);
    updatedBanner(true);
  }, [props.apiURL]);

  const nav = useNavigate();
  const buttonClick = (e) => {
    updatedId(e);
    updatedBanner(false);
    // nav("/movieInfo");
    console.log(e);
  };

  return (
    <div>
      {/* <Banner apiURL={props.apiURL} /> */}
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
            key={items.id}
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
                <MDBCardText>Language: {items.original_language}</MDBCardText>
                <Link to={`/movieInfo/${items}`}>
                  <MDBBtn
                    color="warning"
                    className="mx-6"
                    style={{ color: "white" }}
                    onClick={() => buttonClick(items)}
                  >
                    Details
                  </MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MoviePages;
