import "../customCss/features.css";
const Fratures = ({ onClose }) => {
  return (
    <>
      <div onClick={onClose} className="featureContentDiv">
        <div onClick={(e) => e.stopPropagation()} className="featureContant">
          <button onClick={onClose} className="featureConBtn">
            ✕
          </button>
          <h4 className="fw-bold mb-3">Features</h4>
          <p>add features</p>
          {/* <div className="container px-4 py-5" id="hanging-icons">
            <h2 className="pb-2 border-bottom">Hanging icons</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
              <div className="col d-flex align-items-start">
                <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                  <svg
                    className="bi"
                    width="1em"
                    height="1em"
                    aria-hidden="true"
                  >
                    <use xlinkHref="#toggles2"></use>
                  </svg>
                </div>
                <div>
                  <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                  <p>
                    Paragraph of text beneath the heading to explain the
                    heading. We'll add onto it with another sentence and
                    probably just keep going until we run out of words.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Primary button
                  </a>
                </div>
              </div>
              <div className="col d-flex align-items-start">
                <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                  <svg
                    className="bi"
                    width="1em"
                    height="1em"
                    aria-hidden="true"
                  >
                    <use xlinkHref="#cpu-fill"></use>
                  </svg>
                </div>
                <div>
                  <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                  <p>
                    Paragraph of text beneath the heading to explain the
                    heading. We'll add onto it with another sentence and
                    probably just keep going until we run out of words.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Primary button
                  </a>
                </div>
              </div>
              <div className="col d-flex align-items-start">
                <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                  <svg
                    className="bi"
                    width="1em"
                    height="1em"
                    aria-hidden="true"
                  >
                    <use xlinkHref="#tools"></use>
                  </svg>
                </div>
                <div>
                  <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                  <p>
                    Paragraph of text beneath the heading to explain the
                    heading. We'll add onto it with another sentence and
                    probably just keep going until we run out of words.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Primary button
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Fratures;
