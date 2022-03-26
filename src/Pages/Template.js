import Header from "../Components/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer";

function Template(props) {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
    </>
  );
}

export default Template;
