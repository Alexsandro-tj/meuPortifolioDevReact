import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css'
import SobreMim from './components/SobreMim';
import Projetos from './components/Projetos';
import Contatos from './components/Contatos';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Header />
      <Hero />
      <SobreMim />
      <Projetos />
      <Contatos />
      <Footer />
    </>
  )
}

export default App
