import "./EmailInput.css";

function EmailInput({ state, stateHandler }) {
  return (
    <form className="email-form" action="">
      <input
        className="email-form__input"
        placeholder="Enter your email"
        value={state.email}
        onChange={() => stateHandler("email")}
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
