import { useState, useContext, useEffect } from "react";
import "../customCss/header.css";
import Faq from "./faq";
import Fratures from "./features";
import About from "./about";
import { CreatePostContext } from "../store/storageForCreatPost";
import { CiHome } from "react-icons/ci";
import { IoCreate } from "react-icons/io5";
import CreatePost from "./createPost";
import Mdo from "./mdo";

const Header = () => {
  const { setInputVal, inputVal: searchVal } = useContext(CreatePostContext);
  const [showFaq, setShowFaq] = useState(false);
  const [showFeatyres, setShowFeatures] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [localInputVal, setLocalInputVal] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);

  const clickedSearchBtn = () => {
    setInputVal(localInputVal);
  };
  useEffect(() => {
    if (searchVal === "") setLocalInputVal("");
  }, [searchVal, setLocalInputVal]);
  const closeDrawer = () => setDrawerOpen(false);
  return (
    <>
      <div className="container-fluid  flex-shrink-0 headerComp">
        <div className="container">
          <header className="d-flex flex-wrap  py-2 mb-3 border-bottom">
            {/* Hamburger — sirf mobile pe */}
            <button
              className={`hb-btn d-lg-none me-3 ${drawerOpen ? "open" : ""}`}
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <span className="hb-line" />
              <span className="hb-line" />
              <span className="hb-line" />
            </button>
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-5 link-body-emphasis text-decoration-none"
            >
              <span className="fs-4 logoText">Text To World</span>
            </a>
            <ul className="nav nav-pills d-none d-lg-flex">
              <li className="nav-item headLinks">
                <a href="#" className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item headLinks">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => setShowFeatures(true)}
                >
                  Features
                </a>
                {showFeatyres && (
                  <Fratures onClose={() => setShowFeatures(false)}></Fratures>
                )}
              </li>

              <li className="nav-item headLinks">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => setShowFaq(true)}
                >
                  FAQs
                </a>
                {showFaq && <Faq onClose={() => setShowFaq(false)}></Faq>}
              </li>
              <li className="nav-item headLinks">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => setShowAbout(true)}
                >
                  About
                </a>
                {showAbout && (
                  <About onClose={() => setShowAbout(false)}></About>
                )}
              </li>
            </ul>
            <form action="submit" className="d-flex  gap-3 ms-auto">
              <input
                type="text"
                placeholder="search "
                className="form-control rounded-5"
                onChange={(e) => setLocalInputVal(e.target.value)}
                value={localInputVal}
              />
              <button
                className="btn btn-success rounded-5"
                type="button"
                onClick={clickedSearchBtn}
              >
                search
              </button>
            </form>
          </header>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? "open" : ""} d-lg-none`}>
        <div className="drawer-inner ">
          {/* Sidebar links */}
          <p className="drawer-section-title">Menu</p>
          <a href="#" className="drawer-link" onClick={closeDrawer}>
            <CiHome size="20px" /> Home
          </a>
          <a
            href="#"
            className="drawer-link"
            onClick={() => {
              setShowCreatePost(true);
              setInputVal("");
              closeDrawer();
            }}
          >
            <IoCreate size="20px" /> Create Post
          </a>

          <hr className="drawer-hr" />

          {/* Header nav links */}
          <p className="drawer-section-title">Navigate</p>
          <a href="#" className="drawer-link active" onClick={closeDrawer}>
            Home
          </a>
          <a
            href="#"
            className="drawer-link"
            onClick={() => {
              setShowFeatures(true);

              closeDrawer();
            }}
          >
            Features
          </a>
          <a
            href="#"
            className="drawer-link"
            onClick={() => {
              setShowFaq(true);
              closeDrawer();
            }}
          >
            FAQs
          </a>
          <a
            href="#"
            className="drawer-link"
            onClick={() => {
              setShowAbout(true);
              closeDrawer();
            }}
          >
            About
          </a>
        </div>
        <hr />
        <div className=" pb-3 ">
          <Mdo></Mdo>
        </div>
      </div>

      {/* Backdrop */}
      {drawerOpen && (
        <div className="drawer-backdrop d-lg-none" onClick={closeDrawer} />
      )}

      {/* Create Post modal */}
      {showCreatePost && (
        <CreatePost onClose={() => setShowCreatePost(false)} />
      )}

      {showFeatyres && <Fratures onClose={() => setShowFeatures(false)} />}
      {showFaq && <Faq onClose={() => setShowFaq(false)} />}
      {showAbout && <About onClose={() => setShowAbout(false)} />}
    </>
  );
};
export default Header;
