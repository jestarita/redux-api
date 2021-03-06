import React, {useState, useEffect, Fragment } from 'react'
import './Movies.scss';

import MoviesServices from '../../services/movies/MoviesServices';
import { useHistory } from 'react-router-dom';

const Listado = (props:any)=>{
    let history = useHistory();
  

    function handleClick() {
   
      history.push('/movie-detail/'+props.pelicula.nombre,{ movie: props.pelicula});
    }
    return(
            <div className="col-sm-4 col-md-4 col-xl-4" key={props.pelicula.nombre}>
                <div className="card mt-3 mx-2 tarjeta-pelicula">
                <img className="card-img-top imagen-pelicula" src={props.pelicula.image} alt={props.pelicula.nombre}  />
                <div className="card-body cuerpo-pelicula">
                    <h2 className="text-center titulo-pelicula">{props.pelicula.nombre}</h2>                
                    <button className="btn btn-info float-right" type="submit" onClick={evt => handleClick()}>Ver mas</button>
                </div>
                </div>
            </div>
            )
  }


const Loading = () =>{
  
    return(
     <div className="col-sm-12 text-center float-sm-right mt-3">
     <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
     <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
     <circle cx="170" cy="170" r="135" stroke="#404041"/>
     <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
     <circle cx="170" cy="170" r="85" stroke="#404041"/>
   </svg>
   </div>
    )
 }
 



const Movies = (props:any) =>{
    const [data, setData] = useState({ results: [] as any });
    const [cargado, setCargado] = useState(false);
    
    useEffect(() => {
      ObtenerPeliculas();
    }, []);



  
  
    const ObtenerPeliculas = () => {
        MoviesServices.getMovies()
        .then(response => {
          setData(response.data);
          setCargado(true);
        })
        .catch(e => {
          console.log(e);
        });
    };

    const filter_movies = data.results.filter((peli:any) => {      
       
        if (props.search.name !== "") {
            return peli.nombre.toLowerCase().includes((props.search.name.toLowerCase()))   
        }

        if (props.search.genre !== "") {
            return peli.generos.includes((Number(props.search.genre)))   
        }
        return data.results;
        
    });


return (
    <Fragment>
            <div className="row">
                {
                !cargado || !filter_movies ?(<Loading />):(<Fragment>
                    {filter_movies.sort((a:any, b:any) => a.nombre > b.nombre ? 1 : -1).map((movie:any) => (
                        <Listado key={movie.nombre}  pelicula={movie} />                    
             
                    ))} 
                </Fragment>
                )
                }
                </div>
    </Fragment>
)
}

export default {Movies, Loading};