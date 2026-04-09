import { useState } from "react";
import "../customCss/mod.css";
import Setting from "./setting";

const Mdo = () => {
  const [showSetting, setShowSetting] = useState(false);
  return (
    <>
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle mb-3 ms-4 "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="profile.jpg"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2 profileImg"
          />
          <strong className="mdoHeading">mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow dropDown ">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => setShowSetting(true)}
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
      {showSetting && <Setting onClose={() => setShowSetting(false)}></Setting>}
    </>
  );
};
export default Mdo;
