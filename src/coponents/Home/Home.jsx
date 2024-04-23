import style from './Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Home() {
    return ( 

      <div >
          <div className={style.page}>
            <div className={style.content}>
<div className={style.section}> 
<div className={style.boxLeft}>
                <div className={style.cardBox}>
                 <div className={style.image}></div>
                 <div className={style.cardBody}>
                  <h1>Hola! soy Ludmila</h1>
                
            <p>Me considero una entusiasta del mundo IT con una pasión por el aprendizaje continuo. He completado una variedad de cursos en tecnología y disfruto enfrentando desafíos que amplíen mis horizontes. En mi proceso de aprendizaje, he podido llevar adelante prácticas y proyectos donde pude utilizar mis conocimientos en javascript, react, css, redux, bootstrap, figma, etc.</p>
           
  <p>
  <svg id="Layer_1" height="50" viewBox="0 0 24 24" width="50" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m22.563 1.437c-2.374-2.374-5.919-1.795-10.563 1.7-4.643-3.495-8.187-4.075-10.563-1.7s-1.795 5.919 1.7 10.563c-3.495 4.643-4.075 8.188-1.7 10.563a4.7 4.7 0 0 0 3.442 1.437c1.971 0 4.351-1.052 7.121-3.136 2.769 2.084 5.149 3.136 7.121 3.136a4.7 4.7 0 0 0 3.442-1.437c2.375-2.375 1.8-5.919-1.7-10.563 3.495-4.644 4.075-8.188 1.7-10.563zm-3.478.591a2.806 2.806 0 0 1 2.067.819c1.746 1.747.456 4.713-1.588 7.539-.838-.988-1.782-2.015-2.858-3.092s-2.106-2.021-3.094-2.86c1.898-1.373 3.86-2.406 5.473-2.406zm-.774 9.972c-1.011 1.22-2.082 2.361-3.016 3.3s-2.075 2-3.295 3.011c-1.22-1.011-2.361-2.082-3.295-3.011s-2.005-2.08-3.016-3.3c1.011-1.22 2.082-2.362 3.016-3.295s2.075-2.005 3.295-3.017c1.22 1.01 2.361 2.083 3.3 3.017s2 2.075 3.011 3.295zm-15.463-9.152a2.8 2.8 0 0 1 2.067-.82c1.613 0 3.575 1.033 5.473 2.406-.988.839-2.016 1.783-3.094 2.86s-2.02 2.1-2.859 3.092c-2.043-2.826-3.335-5.792-1.587-7.538zm0 18.3c-1.746-1.746-.456-4.713 1.587-7.538.839.988 1.783 2.015 2.859 3.092s2.1 2.023 3.089 2.861c-2.825 2.046-5.791 3.337-7.535 1.589zm18.3 0c-1.745 1.744-4.71.457-7.535-1.585.986-.838 2.014-1.787 3.089-2.861s2.02-2.1 2.858-3.092c2.048 2.83 3.34 5.796 1.592 7.542z"/><circle cx="12" cy="12" r="2"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" id="js" viewBox="0 0 24 24" width="50" height="50"><path d="M16.122,18.75a2.456,2.456,0,0,0,2.225,1.37c.934,0,1.531-.467,1.531-1.113,0-.773-.613-1.047-1.642-1.5l-.564-.242c-1.627-.693-2.708-1.562-2.708-3.4a3.014,3.014,0,0,1,3.3-2.979A3.332,3.332,0,0,1,21.474,12.7l-1.756,1.127a1.534,1.534,0,0,0-1.451-.966.982.982,0,0,0-1.08.966c0,.677.419.951,1.387,1.37l.564.241c1.916.822,3,1.66,3,3.543,0,2.031-1.595,3.143-3.737,3.143a4.333,4.333,0,0,1-4.11-2.306Zm-7.967.2c.354.628.677,1.16,1.451,1.16.741,0,1.209-.29,1.209-1.418V11.02H13.07v7.7a3.063,3.063,0,0,1-3.368,3.4,3.5,3.5,0,0,1-3.383-2.06Z"/></svg>

  </p>
                  <div className={style.cardButtons}>
                    <Link to='https://github.com/Foggynoti0n'> <button className={style.btn}> Follow me on GitHub</button></Link>
                 
                </div>
                 </div>
                </div>

              </div>
              <div className={style.boxRigth}>
             <div className={style.imageR}></div>
              </div>
</div>
            </div>
          <div className={style.title}>
          <h2>Mis proyectos</h2>
          <p>En cada uno de los proyectos llevados a cabo, pude pulir mis habilidades tech y aprender acerca del trabajo en equipo</p>
          </div>
          <div className={style.cards}>

<div className={style.projectCard}>
<Link to='https://wearfashion.vercel.app/'>
<div src="..." className={style.imageCard} alt="..."> </div>
</Link>
<div className={style.bodyCard}>
<div className="card-body">
    <h5 className="card-title">Wearfashion</h5>
    <p className="card-text">Este ecommerce es un destino de moda urbana que ofrece una amplia selección de ropa, calzado y accesorios para aquellos que buscan un estilo moderno y urbano. Desde camisetas gráficas hasta zapatillas de deporte de moda, la tienda en línea presenta productos de marcas populares y diseñadores emergentes. La interfaz de usuario es fácil de navegar, con opciones de búsqueda avanzada y filtros para ayudar a los clientes a encontrar exactamente lo que están buscando.</p>
    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>
</div>

<div  className={style.projectCard}>
  <Link to='https://github.com/Foggynoti0n/Dogs' >
  <div src="..." className={style.imageCard2} alt="..."> </div>
  </Link>

<div className={style.bodyCard}>
<div className="card-body">
    <h5 className="card-title">Paws</h5>
    <p className="card-text">

Esta página es un refugio digital para perros que buscan un hogar amoroso. Ofrece una plataforma intuitiva donde los usuarios pueden navegar a través de perfiles detallados de perros en busca de adopción. Los usuarios pueden filtrar la búsqueda según sus preferencias, como tamaño, edad y nivel de actividad. Además, la página proporciona información sobre el proceso de adopción, consejos de cuidado de mascotas y recursos útiles para los nuevos dueños de perros.</p>
    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>
  
</div>


          </div>
        </div>

        <footer className={style.footer}>
      <div className={style.footerContent}>
        <p>© 2024 Miranda Ludmila</p>
        <h5>No dudes en contactarme mediante mis redes sociales!</h5>
        <div className={style.socialIcons}>
          <a href="https://www.linkedin.com/in/ludmila-rosa-miranda/" >
          Linkedin
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://github.com/Foggynoti0n">
            Github
          </a>
     
        </div>
        <span>lurm98@gmail.com</span>
      </div>
    </footer>
      </div>
     );
}

export default Home;