/* eslint-disable react/prop-types */
import { useState } from "react";
import "./EmailInput.css";

function EmailInput() {
  const [email, setemail] = useState("")

  return (
    <form className="email-form | fs-other-500" action="">
      <input
        className="email-form__input | clr-neutral-600 fw-regular"
        placeholder="Enter your email"
        value={email}
        onChange={({target}) => setemail(target.value)}
        name="email"
        type="text"
      />
      <button className="emailt-form__submit | clr-neutral-100 fw-bold" type="submit">
        Subscribe
      </button>
    </form>
  );
}

export default EmailInput;
