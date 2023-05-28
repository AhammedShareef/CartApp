import React, { useEffect, useState } from "react";
import axios from "axios";
import { imageUrl } from "../URL/Url";

const Banner = ({ apiURL }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (apiURL.length > 0) {
      axios
        .get(apiURL)
        .then((res) =>
          setItem(
            res.data.results[
              Math.floor(Math.random() * res.data.results.length)
            ]
          )
        );
    }
  }, [apiURL]);
  console.log(item);
  return (
    <div>
      {item && (
        <img
          style={{ height: "90vh", width: "100%" }}
          src={imageUrl + item?.backdrop_path}
          alt=""
        />
      )}
    </div>
  );
};

export default Banner;
