import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

type TParams = { peli: any };
const Movies_Detail = ({match}: RouteComponentProps<TParams>) =>{

    useEffect(() => {
        
        return () => {
            
        }
    })
    console.log(match);
return(<h2>hola</h2>)
}

export default Movies_Detail;