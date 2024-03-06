import "./FaqFirst.css";
import Faq from "/src/components/globals/Faq/Faq";
import { nanoid } from "nanoid";
import { useRef } from "react";

function FaqFirst() {
  const {current: faqData} = useRef([
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
  ].map(data => {return {...data, id: nanoid()}}));
  return (
    <div className="faq | faq-first">
      <Faq faqData={faqData} faqHeader="1. FAQ Accordion V1" faqClass={"faq-main--first"} />
    </div>
  );
}

export default FaqFirst;
