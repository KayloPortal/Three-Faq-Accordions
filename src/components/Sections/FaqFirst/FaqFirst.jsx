import "./FaqFirst.css";
import Faq from "/src/components/globals/Faq/Faq";
import Accordion from "/src/components/globals/Accordion/Accordion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { nanoid } from "nanoid";

function FaqFirst() {
  const faqData = [
    {
      title: "What is Webflow and why is it the best website builder?",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      title: "What is your favorite template from BRIX Templates?",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      title: "How do you clone a Webflow Template from the Showcase?",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      title: "Why is BRIX Templates the best Webflow agency out there?",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
  ];

  return (
    <div className="faq">
      <Faq faqHeader="1. FAQ Accordion V1">
        {faqData.map((data) => (
          <Accordion key={nanoid()}>
            <div className="accordion-headings">
              <h3 className="accordion__heading">{data.title}</h3>
              <button className="accordion-toggle" aria-label="toggle ">
              <ChevronRightIcon className="accordion-toggle__icon | h-6 w-6 text-blue-500" />
            </button>
            </div>
            <p className="accordion__desc">{data.desc}</p>
          </Accordion>
        ))}
      </Faq>
    </div>
  );
}

export default FaqFirst;
