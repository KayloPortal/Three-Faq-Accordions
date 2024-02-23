/* eslint-disable react/prop-types */
import { useState } from "react";
import "./EmailInput.css";

function EmailInput() {
  const [email, setemail] = useState("")

  return (
    <form className="email-form" action="">
      <input
        className="email-form__input"
        placeholder="Enter your email"
        value={email}
        onChange={({target}) => setemail(target.value)}
        name="email"
        type="text"
      />
      <button className="emailt-form__submit" type="submit">
        Subscribe
      </button>
    </form>
  );
}

export default EmailInput;
