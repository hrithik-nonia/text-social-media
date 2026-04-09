import "../customCss/setting.css";
import ThemeToggle from "./themeToggel";
const Setting = ({ onClose }) => {
  return (
    <>
      <div className="sett-backdrop" onClick={onClose} />

      <div className="sett-panel">
        <div className="sett-header">
          <h6 className="fw-bold m-0">Settings</h6>
          <button onClick={onClose} className="sett-close-btn">
            ✕
          </button>
        </div>

        <div className="sett-body">
          <p>🔔 Notifications</p>
          <p>🔒 Privacy</p>

          <ThemeToggle></ThemeToggle>

          <p>🚪 Logout</p>
        </div>
      </div>
    </>
  );
};
export default Setting;
