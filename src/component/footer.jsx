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
                className="mb-3 me-2 mb-md-0  fw-bold text-decoration-none lh-1 d-none d-lg-flex footerTxt"
                aria-label="Bootstrap"
              >
                Text To World
              </a>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-lg-3 ">
                <a
                  className=" text-decoration-none footerTxt"
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                >
                  Instagram
                  <FaInstagram size={"20px"} />
                </a>
              </li>
              <li className="ms-lg-3">
                <a
                  className=" text-decoration-none footerTxt"
                  href="https://www.facebook.com/"
                  aria-label="Facebook"
                >
                  Facebook
                  <FaFacebook size={"20px"} />
                </a>
              </li>
            </ul>
            <div className="text-center  border-top">
              <span className="mb-3 mb-md-0  ms-4 footerTxt">
                © 2025 Company, Inc
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Footer;
