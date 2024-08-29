import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import './about.css'; // Asegúrate de tener tus estilos en este archivo

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
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
  {/* Título de Tecnologías */}
  <h3 className="text-2xl font-bold mb-4" data-aos="fade-up">
    Tecnologías
  </h3>
  
  {/* Contenedor de Tecnologías */}
  <div className="flex flex-col justify-start items-center w-full mb-8">
    {/* Primera fila de tecnologías */}
    <div className="flex justify-center space-x-4 mb-4">
      <div className="flex flex-col items-center">
        <i className="fab fa-js text-4xl" data-aos="fade-up"></i>
        <p className="text-sm mt-2">JavaScript</p>
      </div>
      <div className="flex flex-col items-center">
        <i className="fab fa-react text-4xl" data-aos="fade-up" data-aos-delay="100"></i>
        <p className="text-sm mt-2">React</p>
      </div>
      <div className="flex flex-col items-center">
        <i className="fab fa-css3-alt text-4xl" data-aos="fade-up" data-aos-delay="200"></i>
        <p className="text-sm mt-2">CSS</p>
      </div>
      <div className="flex justify-center space-x-4">
      <div className="flex flex-col items-center">
      <i className="fas fa-database text-4xl" data-aos="fade-up" data-aos-delay="300"></i>
      <p className="text-sm mt-2">Redux</p>
      </div>
      <div className="flex flex-col items-center">
        <i className="fab fa-bootstrap text-4xl" data-aos="fade-up" data-aos-delay="400"></i>
        <p className="text-sm mt-2">Bootstrap</p>
      </div>
      <div className="flex flex-col items-center">
        <i className="fab fa-figma text-4xl" data-aos="fade-up" data-aos-delay="500"></i>
        <p className="text-sm mt-2">Figma</p>
      </div>
    </div>
    </div>
    

  </div>

  {/* Título de Habilidades Blandas */}
  <h3 className="text-2xl font-bold mb-4" data-aos="fade-up" >
    Habilidades Blandas
  </h3>


  <div className="flex flex-col justify-start items-center w-full">
    
    <div className="flex justify-center space-x-4 mb-4">
      <div className="flex flex-col items-center">
        <i className="fas fa-lightbulb text-4xl" data-aos="fade-up" data-aos-delay="520"></i>
        <p className="text-sm mt-2">Creatividad</p>
      </div>
      <div className="flex flex-col items-center">
        <i className="fas fa-comments text-4xl" data-aos="fade-up" data-aos-delay="530"></i>
        <p className="text-sm mt-2">Comunicación</p>
      </div>
      <div className="flex flex-col items-center">
        <i className="fas fa-users text-4xl" data-aos="fade-up" data-aos-delay="540"></i>
        <p className="text-sm mt-2">Trabajo en equipo</p>
      </div>
      <div className="flex justify-center space-x-4">
      <div className="flex flex-col items-center">
        <i className="fas fa-ear-listen text-4xl" data-aos="fade-up" data-aos-delay="550"></i>
        <p className="text-sm mt-2">Escucha activa</p>
      </div>
      <div className="flex flex-col items-center">
        <i className="fas fa-handshake text-4xl" data-aos="fade-up" data-aos-delay="560"></i>
        <p className="text-sm mt-2">Responsabilidad</p>
      </div>
      <div className="flex flex-col items-center">
        <i className="fas fa-heart text-4xl" data-aos="fade-up" data-aos-delay="570"></i>
        <p className="text-sm mt-2">Resiliencia</p>
      </div>
    </div>
    </div>

  </div>
</div>







  <div className="about2 w-1/2 h-full bg-contain bg-center" data-aos="fade-left"></div>
</div>


    </div>
  );
};

export default About;
