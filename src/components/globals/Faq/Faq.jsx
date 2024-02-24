/* eslint-disable react/prop-types */
import "./Faq.css"

function Faq({faqHeader, children}) {
  return (
    <div className="container">
        <div className="faq-header">
          <h2 className="faq-header__heading">{faqHeader}</h2>
          <button className="faq-header__desc">Preview Cloneable</button>
        </div>
        <div className="faq-accordions | c">
          {children}
        </div>
      </div>
  )
}

export default Faq