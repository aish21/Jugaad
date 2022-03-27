import Header from "../Components/Header";
import Content from "../Components/Content";

function Template(props) {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
    </>
  );
}

export default Template;
