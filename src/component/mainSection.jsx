import "../customCss/mainSection.css";
import Cart from "./cartData";
const MainSection = () => {
  return (
    <>
      <div className="container-fluid mainContentContainer">
        <div className="row ">
          <Cart></Cart>
        </div>
      </div>
    </>
  );
};
export default MainSection;
