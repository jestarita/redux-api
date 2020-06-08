import React from 'react';
import { useHistory } from "react-router-dom";
import './ListCountries.scss'


interface propiedades  {
    dato: any
}
const ListCountries = (props:propiedades) =>{

    let history = useHistory();

    function handleClick(pais:any) {
      history.push(`/detalle/${pais.name}`, {land: pais});
    }
    
    return(
        <div className="col-sm-4 col-md-4 col-xl-4" key={props.dato.alpha3Code}>
        <div className="card mt-3 mx-2 tarjeta-pelicula">
        <img className="card-img-top imagen-pais" src={props.dato.flag} alt={props.dato.alpha3Code}  />
        <div className="card-body cuerpo-pelicula">
            <h2 className="text-center titulo-pelicula">{props.dato.name}</h2>                
             <button type="submit" className="btn btn-info float-right" onClick={evt => handleClick(props.dato)}>Ver mas</button> 
        </div>
        </div>
    </div>
    )
}

export default ListCountries;