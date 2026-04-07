import "../customCss/footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footerContainer">
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-white fw-bold text-decoration-none lh-1"
                aria-label="Bootstrap"
              >
                Text To World
              </a>
              <span className="mb-3 mb-md-0 text-white ms-4">
                © 2025 Company, Inc
              </span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3 ">
                <a
                  className="text-white text-decoration-none"
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                >
                  Instagram
                  <FaInstagram size={"20px"} />
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-white text-decoration-none"
                  href="https://www.facebook.com/"
                  aria-label="Facebook"
                >
                  Facebook
                  <FaFacebook size={"20px"} />
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Footer;
