/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./EmailInput.css";
import toast, { Toaster } from "react-hot-toast";
import {getSubmittedEmails} from "/src/contexts/submitedEmails"

function EmailInput() {
  const [email, setEmail] = useState("");
  // When an API is available, this will asked from the API. Because I don't have an api here, I use this array just for testing and a showcase.
  const submitedEmails = useContext(getSubmittedEmails())
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const submitData = (e) => {
    e.preventDefault();
    const match = email.match(emailRegex);
    // match ? ss
    if (match !== null && match[0] === email) {
      submitedEmails.value.includes(email) ? renderError("This email is joined before") : sendData()

    } else {
      renderError("Please enter a valid email");
    }
  };

  const sendData = () => {
    submitedEmails.setValue([...submitedEmails.value, email])
    toast.success("You joined the newslatter!");
  };

  const renderError = (message) => {
    toast.error(message);
  };

  return (
    <form
      className="email-form | fs-other-500 fs-other-300-m"
      action=""
      onSubmit={submitData}
    >
      <input
        className="email-form__input | fw-regular"
        placeholder="Enter your email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        name="email"
        type="text"
      />
      <button
        className="email-form__submit | clr-neutral-100 fw-bold"
        type="submit"
      >
        Subscribe
      </button>
      <Toaster />
    </form>
  );
}

export default EmailInput;
