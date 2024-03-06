/* eslint-disable react/prop-types */
import Accordions from "../Accordions/Accordions";
import "./Faq.css";

function Faq({ faqHeader, faqData, faqClass }) {
  return (
    <div className="container">
      <div className="faq-header | round-200">
        <h2 className="faq-header__heading | fs-heading-300 clr-neutral-800 fw-bold ">
          {faqHeader}
        </h2>
        <button className="faq-header__button | clr-primary-100 fw-medium">
          Preview Cloneable
        </button>
      </div>
      <div className={`faq-main | ${faqClass} round-300`}>
        <div className={`faq-accordions`}>
          <Accordions accordionsData={faqData} />
        </div>
      </div>
    </div>
  );
}

export default Faq;
