import { firebasestorage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";

function BannerIncidator(props) {
  return (
    <button
      type="button"
      data-bs-target="#bannerIndicators"
      data-bs-slide-to={props.index}
      className={props.active ? "active" : ""}
      aria-current={props.active}
    />
  );
}

function BannerImage(props) {
  return (
    <div
      className={"carousel-item " + (props.active ? "active" : "")}
      data-bs-interval="5000"
    >
      <div
        className="ratio"
        style={{ "--bs-aspect-ratio": "50%", maxHeight: "460px" }}
      >
        <img
          className="d-block w-100 h-100 bg-dark cover"
          alt=""
          src={props.image}
        />
      </div>
      <div className="carousel-caption d-none d-lg-block">
        <h5>What's your Batter?</h5>
        <p>Let us satisfy your sweet tooth</p>
      </div>
    </div>
  );
}

function Banner(props) {
  const [banner, setBanner] = useState(null);
  console.log(props.picPath);
  getDownloadURL(ref(firebasestorage, props.picPath))
  .then((url) => {
    console.log(url);
    setBanner(url);
  })
  .catch((error) => {
    // Handle any errors
    console.log(error.message);
  });
  return (
    <div
      id="bannerIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ marginTop: "56px" }}
    >
      <div className="carousel-indicators">
        <BannerIncidator index="0" active={true} />
      </div>
      <div className="carousel-inner">
        <BannerImage image={banner} active={true} />
      </div>
    </div>
  );
}

export default Banner;
