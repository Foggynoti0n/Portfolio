import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import './about.css'; // Asegúrate de tener tus estilos en este archivo

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, // Cambia a true para que la animación ocurra una sola vez y no cause scroll innecesario
      offset: 200, // Ajusta el offset para asegurar que los elementos no se muevan fuera del viewport
    });
  }, []);
  

  return (
    
    <div id='about'>
<div className="page1 about-section h-[70vh] mt-12  flex items-center justify-center">   
     <div className="about w-1/2 h-full bg-contain bg-center" data-aos="fade-right"></div>
      <div className="infoA h-full text-gray-300 text-center w-1/2 p-12" data-aos="fade-left">
        <hr className="separator"/>
        <h2 className="title text-6xl font-bold mt-12 mb-4">Sobre mí</h2>
        <p className="paragraph text-xl mt-8">Me considero una entusiasta del mundo IT con una pasión por el aprendizaje continuo.</p>
        <p className="paragraph text-xl mt-5">Por este motivo, he completado una variedad de cursos en tecnología y disfruto enfrentando desafíos que amplíen mis horizontes.</p>
       
      </div>
  </div>

  <div className="about-section2 w-full page2 h-screen flex items-center justify-start text-white overflow-hidden">
  <div className="infoA h-full flex flex-col pl-24 justify-center items-center w-1/2">
    <p className="text-xl mb-5" data-aos="fade-up">
      En mi proceso de aprendizaje, he podido llevar adelante prácticas y proyectos donde pude utilizar mis conocimientos en JavaScript, React, CSS, Redux, Bootstrap, Figma, etc.
    </p>
    <p className="text-xl mt-5" data-aos="fade-up" data-aos-delay="300">
      Considero que mis soft skills principales son: creatividad, comunicación eficaz, trabajo en equipo, escucha activa, responsabilidad y resiliencia.
    </p>
  </div>
  <div className="about2 w-1/2 h-full bg-contain bg-center" data-aos="fade-left"></div>
</div>


    </div>
  );
};

export default About;
