import Header from "./components/Sections/Header/Header";
import Hero from "./components/Sections/Hero/Hero";
import SubmittedEmailsProvider from "./contexts/submitedEmails";

function App() {
  return (
    <SubmittedEmailsProvider>
      <header>
        <Header />
        <Hero />
      </header>
    </SubmittedEmailsProvider>
  );
}

export default App;
