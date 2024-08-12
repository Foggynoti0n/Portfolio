// actions.js
import * as ActionTypes from './types';
import axios from 'axios';

export const fetchProjects = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/src/Data/Data'); // Reemplaza '/ruta/a/Data.js' con la ruta correcta a tu archivo Data.js
      const jsonData = response.data.match(/const Data = (\[.*?\]);/s); // Busca la declaración de la constante Data y extrae el JSON
      if (jsonData && jsonData.length > 1) {
        const data = JSON.parse(jsonData[1]); // Parsea el JSON
        console.log('Datos:', data); // Esto imprimirá el JSON en la consola
        dispatch(fetchProjectsSuccess(data));// Devuelve los datos si necesitas utilizarlos fuera de esta función
      } else {
        throw new Error('No se pudo encontrar el JSON en el archivo Data.js');
      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
      dispatch(fetchProjectsFailure(error.message));
  
    }
  };
};

export const fetchProjectsSuccess = projects => ({
  type: ActionTypes.FETCH_PROJECTS_SUCCESS,
  payload: projects
});

export const fetchProjectsFailure = errorMessage => ({
  type: ActionTypes.FETCH_PROJECTS_FAILURE,
  payload: errorMessage
});
