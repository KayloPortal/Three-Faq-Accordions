/* eslint-disable react/prop-types */
import "./Accordions.css";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Accordion from "/src/components/globals/Accordion/Accordion";
import { useState } from "react";


function Accordions({ accordionsData }) {
  const [selectedId, setSelectedId] = useState("");

  function handleClick(id) {
    setSelectedId((prev) => (prev === id ? "" : id));
  }
  return (
    <>
      {accordionsData.map((data) => {
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
    </>
  );
}

export default Accordions;
