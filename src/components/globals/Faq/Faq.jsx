/* eslint-disable react/prop-types */
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Accordion from "/src/components/globals/Accordion/Accordion";
import "./Faq.css";
import { useState } from "react";

function Faq({ faqHeader, faqData, faqClass }) {
  const [selectedId, setSelectedId] = useState("");

  function handleClick(id) {
    setSelectedId((prev) => (prev === id ? "" : id));
  }

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
      <div className={`faq-accordions ${faqClass} | round-300`}>
        {faqData.map((data) => {
          return (
            <Accordion
              accordionId={data.id}
              key={data.id}
              selectionHandler={() => handleClick(data.id)}
              isSelected={selectedId === data.id ? true : false}
            >
              <div className="accordion-headings">
                <h3 className="accordion__heading | fs-heading-400 clr-neutral-800 fw-medium">
                  {data.title}
                </h3>
                <button className="accordion-toggle" aria-label="toggle ">
                  <ChevronRightIcon className="accordion-toggle__icon | stroke-cyan-500" />
                </button>
              </div>
              <p className="accordion__desc | fs-paragraph-200">{data.desc}</p>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
