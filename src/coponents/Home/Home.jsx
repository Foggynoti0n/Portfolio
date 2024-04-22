import style from './Home.module.css'


function Home() {
    return ( 

      <div >
          <div className={style.page}>
            <div className={style.content}>
<div className={style.section}> 
<div className={style.boxLeft}>
                <div className={style.card}>
                 <div className={style.image}></div>
                 <div className={style.cardBody}>
                  <h1>Hi! I'm Ludmila</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maiores iusto perferendis distinctio deserunt? Ea quos, ducimus quaerat asperiores perferendis, distinctio recusandae assumenda magnam, suscipit dicta reprehenderit. Voluptate, tenetur facere.</p>
                  <div className={style.cardButtons}>
                  <button className={style.btn}> Follow me on GitHub</button>
                </div>
                 </div>
                </div>

              </div>
              <div className={style.boxRigth}>
             <div className={style.imageR}></div>
              </div>
</div>
            </div>
        </div>
      </div>
     );
}

export default Home;