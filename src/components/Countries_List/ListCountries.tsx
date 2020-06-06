import React from 'react';
import { useHistory } from "react-router-dom";

interface propiedades  {
    codigo: string,
    flag:string,
    name: string,
    capital: string
}
const ListCountries = (props:propiedades) =>{

    let history = useHistory();

    function handleClick(pais:string) {
      history.push("/detalle/"+pais);
    }
  
    return(
        <div className="col-sm-4 col-md-4 col-xl-4" key={props.codigo}>
        <div className="card mt-3 mx-2 tarjeta-pelicula">
        <img className="card-img-top imagen-pelicula" src={props.flag} alt={props.codigo}  />
        <div className="card-body cuerpo-pelicula">
            <h2 className="text-center titulo-pelicula">{props.name}</h2>                
            <p className="text-justify descripcion-pelicula">
               Capital: {props.capital}
            </p>
             <button type="submit" className="btn btn-info float-right" onClick={evt => handleClick(props.name)}>Ver mas</button> 
        </div>
        </div>
    </div>
    )
}

export default ListCountries;