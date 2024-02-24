import { createContext, useRef } from "react";

const submittedEmailsContext = createContext(null);

// eslint-disable-next-line react/prop-types
function SubmittedEmailsProvider({children}) {
  const submittedEmails = useRef([]);
  return (
    <submittedEmailsContext.Provider
      value={{
        value: submittedEmails,
        setValue: (newValue) => {
          submittedEmails.current = newValue;
        },
      }}
    >{children}</submittedEmailsContext.Provider>
  );
}

function getSubmittedEmails() {
  return submittedEmailsContext
    ? submittedEmailsContext
    : console.log(
        "The submittedEmails context is not defined in the called scope"
      );
}

// eslint-disable-next-line react-refresh/only-export-components
export {getSubmittedEmails}
export default SubmittedEmailsProvider;
