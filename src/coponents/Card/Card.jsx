// ProjectCard.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import style from './Card.module.css'


function Card({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`${style.projectCard} ${inView ? 'inView' : ''}`}>
      {children}
    </div>
  );
}

export default Card;
