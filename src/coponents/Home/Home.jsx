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
                  <p>Soy Ludmila, una entusiasta del mundo IT con una pasión por el aprendizaje continuo. He completado una variedad de cursos en tecnología y disfruto enfrentando desafíos que amplíen mis horizontes. En mi proceso de aprendizaje, he podido llevar adelante prácticas y proyectos donde pude utilizar mis conocimientos en javascript, react, css, redux, bootstrap, figma, etc.</p>
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