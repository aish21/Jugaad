import BannerZero from "./cookieCake.jpg";
import BannerOne from "./brookie.jpg";
import BannerTwo from "./cashewCake.jpg";

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

function Banner() {
  return (
    <div
      id="bannerIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ marginTop: "56px" }}
    >
      <div className="carousel-indicators">
        <BannerIncidator index="0" active={true} />
        <BannerIncidator index="1" />
        <BannerIncidator index="2" />
      </div>
      <div className="carousel-inner">
        <BannerImage image={BannerZero} active={true} />
        <BannerImage image={BannerOne} />
        <BannerImage image={BannerTwo} />
      </div>
    </div>
  );
}

export default Banner;