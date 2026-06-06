
import Header from './components/Header';
import Hero from './components/Hero';
import styles from './App.module.css'
import SobreMim from './components/SobreMim';
import Projetos from './components/Projetos';
import Contatos from './components/Contatos';
import Footer from './components/Footer';
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, [])

  const scroolToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <Header />
      <Hero />
      <SobreMim />
      <Projetos />
      <Contatos />
      <Footer />

      {showButton &&(
        <button className={styles.arrow} onClick={scroolToTop}>
          <FaArrowUp />
        </button>

        
      )}

    </>
  )
}

export default App
