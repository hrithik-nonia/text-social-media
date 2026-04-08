import { useState, useContext, useEffect } from "react";
import "../customCss/header.css";
import Faq from "./faq";
import Fratures from "./features";
import About from "./about";
import { CreatePostContext } from "../store/storageForCreatPost";

const Header = () => {
  const { setInputVal, inputVal: searchVal } = useContext(CreatePostContext);
  const [showFaq, setShowFaq] = useState(false);
  const [showFeatyres, setShowFeatures] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [localInputVal, setLocalInputVal] = useState("");
  const clickedSearchBtn = () => {
    setInputVal(localInputVal);
  };
  useEffect(() => {
    if (searchVal === "") setLocalInputVal("");
  }, [searchVal, setLocalInputVal]);
  return (
    <>
      <div className="container-fluid  flex-shrink-0 headerComp">
        <div className="container">
          <header className="d-flex flex-wrap  py-2 mb-3 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-5 link-body-emphasis text-decoration-none"
            >
              <span className="fs-4 logoText me-auto">Text To World</span>
            </a>
            <ul className="nav nav-pills ">
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
    </>
  );
};
export default Header;
