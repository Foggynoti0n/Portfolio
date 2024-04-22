import React, { useEffect, useState } from 'react';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

function Nav() {



  const [subMenu, setSubMenu] = useState(new Set());

  const toggleMenu = (event) => {
      const menu = new Set(subMenu);
      if (menu.has(event)) {
          menu.delete(event);
      } else {
          menu.add(event);
      }
      setSubMenu(menu);
  };






  return (
    <nav className={style.nav}>
      <div className={style.boxList}>
        <ul>
      
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
     

  
          
        </ul>
      </div>


<button className={style.navButton} onClick={() => toggleMenu('menu')}>☰</button>

                {subMenu.has('menu') && (
                 
                  
                  <div className={style.sub}>
      <div >
        <ul>
    
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
         
        </ul>
      </div>


      </div>

                       
               
                )}




    </nav>
  );
}

export default Nav;






// @media (max-width: 1350px){

//     .nav{
//         height: 8%;

//     }
//     .boxLogo{
//         width: 10%;
//       font-size: 25px;
//     }

//     .logIn{
//         width: 10%;
//         /* background-color: chocolate; */
//     }

// }

// @media (max-width: 1050px){
//     .nav{
//         height: 10%;

//     }
//     .boxLogo{
//         width: 10%;
//       font-size: 25px;
//     }

//     .logIn{
//         width: 10%;
//         padding-top: 2%;
        
//         /* background-color: chocolate; */
//     }
//     .logInB{
//         background: none;
//         color: white;
//         border: 1px solid white;
//         border-radius: 1em;
//         padding-top: 4%;
//         padding-bottom: 4%;
//     }
    

// }

// @media (max-width: 800px){
//  .nav{
//     height: 10%;

// }
// .boxLogo{
//     width: 12vw;
//     height: 8vw;
//     background-image: url('../../assets/Imagenes/circulo-negro2.png');
//     margin: 0;
//     padding: 0;
//     background-size: contain;
//     background-repeat: no-repeat;
//     background-position: center;
//     display:flex ;
//     align-items: center;
//   justify-content: space-around;
//   font-size: 25px;
//   font-weight: bold;
// }
// .boxList{
//     /* background-color: rgb(63, 63, 63); */
//     width: 55%;

// }
// .boxList ul{
//     display: flex; justify-content: space-around;
// }
// .boxList li{
//     list-style-type: none;
//     cursor: pointer;
//     font-size: 17px;
// }
// .boxList li:hover{
//     border-bottom: 1px solid;
// }

// .link{
//     color: white;
//     text-decoration: none;
// }

// .logIn{
//     width: 12vw;
//     /* background-color: chocolate; */
// }

// .logInB{
//     background: none;
//     color: white;
//     border: 1px solid white;
//     border-radius: 1em;
//     padding-top: 6%;
//     padding-bottom: 6%;
// }

// .logInB:hover{
//     background-color: rgba(255, 255, 255, 0.16);
// }
// }

// @media (max-width: 600px){
//     .nav{
//         height: 8%;
//         width: 100%;
//         /* background-color: brown; */
//         position: absolute;
//         top: 0;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
// padding-right: 3%;
//         box-sizing: border-box;
//         z-index: 1000;

    
//     }
//     .boxLogo{
//         width: 20%;

//         height: 12vw;
//         margin-top: 5%;

//         background-image: url('../../assets/Imagenes/circulo-negro2.png');
//         position: absolute;
//         background-size: contain;
//         background-repeat: no-repeat;
//         background-position: center;
//         display:flex ;
//         align-items: center;
//       justify-content: space-around;
//       font-size: 2em;
//       font-weight: bold;
//       right: 0;
//     }
//     .boxList{
//         /* background-color: rgb(63, 63, 63); */
//         width: 50%;
//     }
//     .boxList ul{
// display: none;
//     }
//     .menuButton{
//         position: absolute;
//         left: 40%;
//         width: 40%;
//         background-color: brown;
//     }
//     .menuButtonIcon{
//         font-size: 2em;
  
//         background: none;
//         color: white;
 
//     }
  
//     .boxList li{
//         list-style-type: none;
//         cursor: pointer;
//         font-size: 10px;
//     }
//     .boxList li:hover{
//         border-bottom: 1px solid;
//     }
    
//     .link{
//         color: white;
//         text-decoration: none;
//     }
    
//     .log{
//         width: 30%;
//         margin-left: 10%;
//         height: 10%;
//         /* background-color: chocolate; */
    
        
//     }
    
//     .logInB{
//         height: 80%;
//         width: 100%;
//         background: none;
//         color: white;
//         border: 1px solid white;
//         border-radius: 1em;

//         padding-top: 4%;
//         padding-bottom: 4%;
//         margin-top: 9%;

//     }
    
//     .logInB:hover{
//         background-color: rgba(255, 255, 255, 0.16);
//     }
//     .navButton{
//         position:absolute;
// display: block;
// top: 35%;
//   left: 0;
// padding: 1%;
//     color: white;
//     font-size: 35px;
//     background: none;
//     font-weight: bold;
//     }

//     .sub{
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//         background-color: rgb(21, 21, 21);
//         position: absolute;
//     left: 0;
//         top:93%;
//         height: 87vh;
//         width: 60%;
//     }

//     .sub  li{
//         list-style-type: none;

//     }
//     }

// .sub li{
//     height: 4em;
//     text-align: left;
    
// }
