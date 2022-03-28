import React, { useParams, useEffect } from "react";

function getSecondPart(str) {
  return str.split('%')[1];
}

function FeatureProduct(props) {

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={Image}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{getSecondPart(props.prodName)}</h5>
          <p className="card-text text-center text-muted">{props.prodPrice}</p>
          <p className="card-text text-center text-muted">{props.prodDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;
