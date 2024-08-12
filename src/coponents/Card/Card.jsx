// Card.js

import style from './Card.module.css'
import React, { useEffect } from 'react';

const Card = ({name, images}) => {
console.log(name, images);

  return (
   <div className={style.card}>
     <div className="card-container">
      
        <div key={name} className="card">
          <img src={images[0]} alt={name} className={style.cardImage} />
          <div className="card-content">
            <h2 className="card-title">{name}</h2>
            <button >Learn more</button>
          </div>
        </div>    </div>
   </div>
  );
};

export default Card;

