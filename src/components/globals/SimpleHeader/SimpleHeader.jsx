/* eslint-disable react/prop-types */
import "SimpleHeader.css";

function SimpleHeader({headerClass, heading, ctaText}) {
  return (
    <div className={`${headerClass} | round-200`}>
      <h2 className={`${headerClass}__heading | fs-heading-300 clr-neutral-800 fw-bold `}>
        {heading}
      </h2>
      <button className={`${headerClass}__button | clr-primary-100 fw-medium`}>
        {ctaText}
      </button>
    </div>
  );
}

export default SimpleHeader;
