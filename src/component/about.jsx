import "../customCss/about.css";
const About = ({ onClose }) => {
  return (
    <>
      <div onClick={onClose} className="faqContentDiv">
        <div onClick={(e) => e.stopPropagation()} className="faqContant">
          <button onClick={onClose} className="faqConBtn">
            ✕
          </button>
          <h4 className="fw-bold mb-3">About</h4>
          <p>add about</p>
        </div>
      </div>
    </>
  );
};
export default About;
