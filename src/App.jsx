import "./App.css";
import Header from "./component/header";
import SideBar from "./component/sideBar";
import MainSection from "./component/mainSection";
import Footer from "./component/footer";
import PostContext from "./store/storageForCreatPost";

function App() {
  return (
    <>
      <PostContext>
        <div className="parrentContainer">
          <Header></Header>
          <div className="container-fluid p-0 flex-grow-1 overflow-hidden">
            <div className="row h-100 m-0">
              <SideBar></SideBar>
              <div className="col-12 col-lg-10 p-0 parentOfMain">
                <MainSection></MainSection>
                <Footer></Footer>
              </div>
            </div>
          </div>
        </div>
      </PostContext>
    </>
  );
}
export default App;
