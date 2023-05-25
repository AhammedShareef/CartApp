import React, { useEffect, useState } from "react";
import axios from "axios";
import { imageUrl } from "../URL/Url";

const Banner = (props) => {
  const [item, setItem] = useState([]);
  const [apiRandomImage, setapiRandomImage] = useState("");

  useEffect(() => {
    axios.get(props.apiURL).then((res) => setItem(res.data.results));
  }, [props.apiURL]);
  useEffect(() => {
    if (item.length > 0) {
      const apiImageIndex = Math.floor(Math.random() * item.length);
      setapiRandomImage(imageUrl + item[apiImageIndex].backdrop_path);
      console.log(item.length);
      console.log(Math.random() * item.length);
      console.log(apiImageIndex);
      console.log(apiRandomImage);
    }
  }, [item]);

  return (
    <div>
      <img
        style={{ height: "90vh", width: "100%" }}
        src={apiRandomImage}
        alt=""
      />
    </div>
  );
};

export default Banner;
