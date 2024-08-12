import Card from "../Card/Card";
import style from './Projects.module.css'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../../redux/actions';

function Projects() {

    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);
  console.log(projects);
  
  useEffect(() => {
    dispatch(fetchProjects());
  }, [fetchProjects])
    return (  
    
        <div className={style.contP}>
<div className={style.cardP}>
   {projects.map((p)=>{
 return (<Card name={p.name} images={p.images}/>)

   })}
            </div>
      
        </div>
        
    
    );
}

export default Projects;