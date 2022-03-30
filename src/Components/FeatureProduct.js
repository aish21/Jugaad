
import { useHistory } from "react-router-dom";
import { firebasestorage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useState } from "react";

function getSecondPart(str) {
  return str.split('%')[1];
}

function getFirstPart(str) {
  return str.split('%')[0];
}

export default function FeatureProduct(props) {
  const history = useHistory();
  const [url, setURL] = useState("");

  function onClick(uid) {
    history.push("/Homepage" + getFirstPart(uid));
  }

  getDownloadURL(ref(firebasestorage, props.picPath))
  .then((url) => {
    console.log(url);
    setURL(url);
  })
  .catch((error) => {
    // Handle any errors
    console.log(error.message);
  });

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={url}
          onClick={() => onClick(props.prodName)}
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
