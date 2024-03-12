import "./Footer.css"
import brixLogo from "/logo.svg"
import EmailInput from "../../globals/EmailInput/EmailInput"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container | container">
      <div>
        <img className="footer__logo" src={brixLogo} alt="Brix Agency" />
        <p className="footer__copyright">Copyright © BRIX Templates | All Rights Reserved</p>
      </div>
      <div>
        <p className="footer__desc">Subscribe to receive free Webflow cloneables every month.</p>
        <EmailInput />
      </div>
      </div>
    </div>
  )
}

export default Footer