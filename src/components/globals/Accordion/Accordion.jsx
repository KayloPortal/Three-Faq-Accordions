/* eslint-disable react/prop-types */
import "./Accordion.css";

function Accordion({ children, isSelected, selectionHandler, accordionId }) {
  return (
    <article
      onClick={() => selectionHandler(accordionId)}
      className={`accordion | ${isSelected ? "accordion--selected" : ""}`}
    >
      {children}
    </article>
  );
}

export default Accordion;
