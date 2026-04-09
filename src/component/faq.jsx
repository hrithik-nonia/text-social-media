import "../customCss/faq.css";
const Faq = ({ onClose }) => {
  return (
    <>
      <div onClick={onClose} className="faqContentDiv">
        <div onClick={(e) => e.stopPropagation()} className="faqContant">
          <button onClick={onClose} className="faqConBtn">
            ✕
          </button>
          <h4 className="fw-bold mb-3">FAQs</h4>
          <p>add FAQ</p>
        </div>
      </div>
    </>
  );
};
export default Faq;
