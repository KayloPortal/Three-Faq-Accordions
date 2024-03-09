/* eslint-disable react/prop-types */
import "./Accordions.css";
import Accordion from "/src/components/globals/Accordion/Accordion";
import {
  ChevronRightIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

// const iconLogics = {
//   chevron: [ChevronRightIcon, ChevronRightIcon],
//   math: ["plus", "minus"],
// };

function Accordions({ accordionsData, iconType, needWraper }) {
  const [selectedId, setSelectedId] = useState("");

  const createAccordion = (data) => {
    const icon = (function () {
      if (iconType === "chevron")
        return (
          <ChevronRightIcon className="accordion-toggle__icon | stroke-cyan-500" />
        );
      else if (iconType === "math") {
        return selectedId === data.id ? (
          <MinusIcon className="accordion-toggle__icon | stroke-cyan-500" />
        ) : (
          <PlusIcon className="accordion-toggle__icon | stroke-cyan-500" />
        );
      }
    })();
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
            {icon}
          </button>
        </div>
        <p className="accordion__desc | fs-paragraph-200">{data.desc}</p>
      </Accordion>
    );
  };

  function handleClick(id) {
    setSelectedId((prev) => (prev === id ? "" : id));
  }
  return (
    <>
      {needWraper ? (
        <>
          <div className="accordions-wrap">
            {accordionsData.map((data, index) =>
              index % 2 === 0 ? createAccordion(data) : false
            )}
          </div>
          <div className="accordions-wrap">
            {accordionsData.map((data, index) =>
              index % 2 === 1 ? createAccordion(data) : false
            )}
          </div>
        </>
      ) : (
        accordionsData.map(createAccordion)
      )}
    </>
  );
}

export default Accordions;
