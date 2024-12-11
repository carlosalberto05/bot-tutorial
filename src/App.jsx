import styles from "./App.module.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/OurServices/Services";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import FrequenQuestions from "./components/Faqs/FrequenQuestions";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FrequenQuestions />
      <Contact />
    </div>
  );
}

export default App;
