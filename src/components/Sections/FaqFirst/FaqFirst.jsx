import "./FaqFirst.css";
import Faq from "/src/components/globals/Faq/Faq";
import Accordion from "/src/components/globals/accordion/accordion";

function FaqFirst() {
  return (
    <div className="faq">
      <Faq faqHeader="1. FAQ Accordion V1">
        <Accordion>
          <div>
            <h3 className="">
              What is Webflow and why is it the best website builder?
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div></div>
        </Accordion>
      </Faq>
    </div>
  );
}

export default FaqFirst;
