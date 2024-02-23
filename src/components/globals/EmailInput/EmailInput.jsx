/* eslint-disable react/prop-types */
import { useState } from "react";
import "./EmailInput.css";

function EmailInput() {
  const [email, setemail] = useState("")

  return (
    <form className="email-form | fs-other-500 fs-other-300-m" action="">
      <input
        className="email-form__input | fw-regular"
        placeholder="Enter your email"
        value={email}
        onChange={({target}) => setemail(target.value)}
        name="email"
        type="text"
      />
      <button className="email-form__submit | clr-neutral-100 fw-bold" type="submit">
        Subscribe
      </button>
    </form>
  );
}

export default EmailInput;
