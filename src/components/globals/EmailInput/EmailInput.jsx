/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "./EmailInput.css";
import toast, { Toaster } from "react-hot-toast";

function EmailInput() {
  const [email, setEmail] = useState("");
  // When an API is available, this will asked from the API. Because I don't have an api here, I use this array just for testing and a showcase.
  const emailsSubmitted = useRef([])
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const submitData = (e) => {
    e.preventDefault();
    const match = email.match(emailRegex);
    // match ? ss
    if (match !== null && match[0] === email) {
      emailsSubmitted.current.includes(email) ? renderError("This email is joined before") : sendData()

    } else {
      renderError("Please enter a valid email");
    }
  };

  const sendData = () => {
    emailsSubmitted.current.push(email)
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
