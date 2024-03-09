import FaqFirst from "./components/Sections/FaqFirst/FaqFirst";
import Header from "./components/Sections/Header/Header";
import Hero from "./components/Sections/Hero/Hero";
import SubmittedEmailsProvider from "./contexts/submitedEmails";
import FaqSecond from "./components/Sections/FaqSecond/FaqSecond"
import "./App.css"

function App() {
  return (
    <SubmittedEmailsProvider>
      <header>
        <Header />
        <Hero />
      </header>
      <main>
        <FaqFirst />
        <FaqSecond />
      </main>
    </SubmittedEmailsProvider>
  );
}

export default App;
