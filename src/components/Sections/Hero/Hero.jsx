import "./Hero.css";
import iconCheck from "/public/icon-check.svg" 
import EmailInput from "/src/components/globals/EmailInput/EmailInput"

function Hero() {
  return (
    <div className="hero">
      <div className="hero-container | container">
        <p className="hero__subheading">Cloneables FOR WEBFLOW</p>
        <h1 className="hero__heading">
          Frequently Asked Questions Accordions Webflow Cloneable Template
        </h1>
        <p className="hero__desc">
          Want to receive a monthly email in your inbox with awesome free
          Webflow cloneables, resources and more? Please submit your email
          below.
        </p>
        <EmailInput />
        <div className="hero-details">
        <img className="hero-details__icon" src={iconCheck} alt="check-icon" />
        <p className="hero-details__desc">
          It&apos;s <strong className="hero-details__percentage">100%</strong> free and we will never send more than
          one email per month
        </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
