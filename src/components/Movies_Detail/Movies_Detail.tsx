import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
const Movies_Detail = () =>{
    const location = useLocation();
    const myparam:any = location.state;
    
return(
   
    <Fragment>
        <div>
        <h2>{myparam.nombre}</h2>
        <img src={myparam.imagen} alt={myparam.nombre} />
<p>{myparam.detail}</p>
        </div>
    </Fragment>
)
}

export default Movies_Detail;