import React from 'react';
import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero';
import Service from './components/services/Service';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import './styles/tailwind.css';
import './styles/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa el CSS de AOS


const App = () => {
  return (
    <div className='main'>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

