import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import Accordions from "../../globals/Accordions/Accordions";
import SimpleHeader from "../../globals/SimpleHeader/SimpleHeader";
import "./FaqSecond.css";

function FaqSecond() {
  const { current: faqData } = useRef([
    [
      {
        title: "What is Webflow and why is it the best website builder?",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        title: "What is your favorite template from BRIX Templates?",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        title: "Why is BRIX Templates the best Webflow agency?",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        title: "When was Webflow officially launched?",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        title: "How do you integrate Jetboost with Webflow?",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
    ].map((data) => {
      return { ...data, id: nanoid() };
    }),
    [
      {
        title: "When was Webflow officially launched?",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        title: "Why is BRIX Templates the best Webflow agency?",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        title: "What is Webflow and why is it the best website builder?",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        title: "What is your favorite template from BRIX Templates?",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
    ].map((data) => {
      return { ...data, id: nanoid() };
    }),
    [
      {
        title: "How do you integrate Jetboost with Webflow?",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        title: "What is Webflow and why is it the best website builder?",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        title: "What is your favorite template from BRIX Templates?",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
    ].map((data) => {
      return { ...data, id: nanoid() };
    }),
  ]);

  const [page, setPage] = useState(1); // can be 1, 2, 3

  function handlePage(newPage) {
    setPage(newPage);
  }

  return (
    <div className="faq | faq-second">
      <div className="container">
        <SimpleHeader
          heading={"2. FAQ Accordion V2"}
          ctaText={"Preview Cloneable"}
          headerClass={"faq-header"}
        />
        <div className={`faq-main | faq-main--second round-300`}>
          <div className="faq-main-navigators">
            {["Section 1", "Section 2", "Section 3"].map((name, index) => (
              <button
                key={name}
                onClick={() => handlePage(index + 1)}
                className={`navigator ${
                  index + 1 === page ? "navigator--selected" : ""
                } | fs-other-600`}
              >
                {name}
              </button>
            ))}
          </div>
          <div className={`faq-accordions`}>
            <Accordions accordionsData={faqData[page - 1]} iconType={"math"} needWraper={false}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FaqSecond;
