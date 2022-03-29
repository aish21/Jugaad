import Banner from "../Components/Banner";
import FeatureProduct from "../Components/FeatureProduct";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";
import { useEffect, useState } from "react";

const prodListRef = ref(database, "products/");

function Landing() {
  var [prodList, setProdList] = useState({}); 
  const [isLoading, setLoading] = useState(true);
  onValue(prodListRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const currVal = prodList;
      currVal[childSnapshot.key] = childSnapshot.val();
      prodList = currVal;
    });
  });

  useEffect(() => {
    setLoading(false);
    console.log(Object.keys(prodList));
  },[prodList]);
  
  if (isLoading) {
    return (<h2 className="text-muted text-center mt-4 mb-3">New Arrival</h2>);
  } else {
    return (
      <>
        <ScrollToTopOnMount />
        <Banner />
        <div className="d-flex flex-column bg-white py-4">
          <p className="text-center px-5">
            We help accelerate your business
          </p>
        </div>
        <h2 className="text-muted text-center mt-4 mb-3">New Arrival</h2>
        <div className="container pb-5 px-lg-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
            {
              Object.keys(prodList).map((key, index) => (
                <FeatureProduct key = {index} prodName = {key} prodDesc = {prodList[key]["desc"]} prodPrice = {prodList[key]["price"]}/>
              ))
            }
          </div>
        </div>
        <div className="d-flex flex-column bg-white py-4">
          <h5 className="text-center mb-3">Follow us on</h5>
          <div className="d-flex justify-content-center">
            <a href="!#" className="me-3">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
            <a href="!#">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </a>
            <a href="!#" className="ms-3">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
