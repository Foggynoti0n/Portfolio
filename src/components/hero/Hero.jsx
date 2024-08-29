import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './hero.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duración de la animación en milisegundos
      once: false,    // Si quieres que la animación solo ocurra una vez
    });
  }, []);

  const handleDownload = () => {
    // El archivo debe estar en la carpeta public
    const link = document.createElement('a');
    link.href = '../../../public/cv_ludmila_miranda_developer.pdf'; // Ruta al archivo en la carpeta public
    link.download = 'cv_ludmila_miranda_developer.pdf'; // Nombre con el que se descargará
    link.click();
  };

  return (
    <div className="relative w-full h-[100vh] pl-16 flex items-left overflow-hidden bg-cover" id="home">
      <div className="mt-24 principal" data-aos="fade-up">
        <div className="w-full md:w-1/2 text-left md:text-left px-6 md:px-12 mt-12">
          <p className="text-gray-300 text-3xl font-semibold">Soy</p>
          <h1 className="text-gray-200 text-9xl tracking-wide mb-4">LUDMILA MIRANDA</h1>
          <h2 className="text-gray-300 text-3xl font-semibold mb-4"></h2>
          <div className="typed-text text-gray-300 text-xl">Front-end Developer</div>
          <div className="flex justify-center md:justify-start mt-8">
            {/* Botón de descarga del CV */}
            <button
              onClick={handleDownload}
              className="btn bg-white text-red-600 border border-transparent py-2 px-4 rounded shadow-md hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
            >
              Descarga mi CV
            </button>
            <a className="btn bg-white text-red-600 border border-transparent py-2 px-4 rounded shadow-md hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 ml-4" href="#footer">
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

