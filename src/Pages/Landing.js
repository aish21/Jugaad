import Banner from "../Components/Banner";
import FeatureProduct from "../Components/FeatureProduct";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";
import { useEffect, useState } from "react";
import JsonData from "../data/data.json";
import { Features } from "../Components/features";
import { Contact } from "../Components/contact";
import { About } from "../Components/about";

const prodListRef = ref(database, "products/");

function Landing() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  var [prodList, setProdList] = useState({}); 
  const [isLoading, setLoading] = useState(true);
  onValue(prodListRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      prodList[childSnapshot.key] = childSnapshot.val();
    });
  });

  useEffect(() => {
    setLoading(false);
    console.log(Object.keys(prodList));
  },[prodList]);
  
  if (isLoading) {
    return (<h2 className="text-muted text-center mt-4 mb-3">New Arrivals</h2>);
  } else {
    return (
      <>
        <ScrollToTopOnMount />
        <Banner />
        <Features data={landingPageData.Features} />
        <h2 className="text-muted text-center mt-4 mb-3">New Arrivals</h2>
        <div className="container pb-5 px-lg-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
            {
              Object.keys(prodList).map((key, index) => (
                <FeatureProduct key = {index} prodName = {key} prodDesc = {prodList[key]["desc"]} prodPrice = {prodList[key]["price"]} picPath = {prodList[key]["photoURL"]}/>
              ))
            }
          </div>
        </div>
        <About data={landingPageData.About} />
        <Contact data={landingPageData.Contact} />
      </>
    );
  }
}

export default Landing;
