import React, { Fragment } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
const Movies_Detail = () =>{
    const location = useLocation();
    const myparam:any = location.state;
  
return(
   
    <Fragment>
  <div className="container-fluid"> 
         <div className="row mt-2 mb-2">
        
            <div className="col-sm-12 col-md-4 col-xl-4">
            <NavLink exact to="/movies" className="btn btn-dark btn-sm ml-2 float-left">
            Atras
            </NavLink>
            <img className="mt-2" src={myparam.movie.image} alt={myparam.nombre} />
            </div>
            <div className="col-sm-12 col-md-6 col-xl-6">
                <div className="mt-3">
            <h2>{myparam.movie.nombre}</h2>            
            <p className="text-justify descripcion-pelicula"><b>A&ntilde;o:</b>  {myparam.movie.año}</p>
            <p className=" text-justify descripcion-pelicula"><b>Estrellas:</b> {myparam.movie.estrellas}</p>
            <p className=" text-justify descripcion-pelicula"><b>Director:</b> {myparam.movie.director}</p>
            <p className=" text-justify descripcion-pelicula"><b>Elenco:</b> {myparam.movie.elenco}</p>
            <p className="text-justify descripcion-pelicula"> <b>Descripci&oacute;n:</b> {myparam.movie.descripccion}</p>
            </div>
            </div>
        </div>
        </div>

    </Fragment>
)
}

export default Movies_Detail;