import "./SocialLeads.css";
import logoShort from "/logo-short.svg";
import logoWhite from "/logo-white.svg";
import imageCards1 from "/image-cards-1.png";
import imageCards2 from "/image-cards-2.png";

function SocialLeads() {
  return (
    <div className="leads block-padding">
      <div className="leads-container | container">
        <div className="card card--blue">
          <div className="card-texts">
            <img className="card__logo" src={logoWhite} />
            <h3 className="card__heading | clr-neutral-100 fs-heading-300">
              Take a look at our amazing premium Webflow Templates
            </h3>
            <p className="card__desc | fs-paragraph-200 clr-neutral-100">
              Also than having free Webflow cloneables, we create cutting-edge
              premium Webflow templates too.
            </p>
            <a className="card__cta | fs-other-500 clr-primary-100 clr-neutral-100" target="_blank" href="https://brixtemplates.com/figma">
              Browse templates
            </a>
          </div>
          <div className="card-image">
            <img className="card-image__img" src={imageCards1} />
          </div>
        </div>
        <div className="card card--white">
          <div className="card-texts">
            <img className="card__logo" src={logoShort} />
            <h3 className="card__heading | clr-neutral-800 fs-heading-300">
              Looking to design & develop an amazing Webflow website?
            </h3>
            <p className="card__desc | fs-paragraph-200 clr-neutral-600">
              If you want to get a hand from the amazing team behind BRIX
              Templates, get in touch with BRIX Agency today.
            </p>
            <a className="card__cta | fs-other-500 clr-neutral-100" target="_blank" href="https://brixagency.com/figma">
              Get a quote
            </a>
          </div>
          <div className="card-image">
            <img className="card-image__img" src={imageCards2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialLeads;
