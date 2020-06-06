import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
 
type TParams = { pais: string };
const Detail = ({match}: RouteComponentProps<TParams>) =>{


    const data = useSelector<any, any>((state:any) => {
        return {
            pais: state.Country_list.countryGet
        }
    });

   const info = data.pais;
   
   
    return(
        <Fragment>
        <h2>hola</h2>
        <ul>
        

    <li>{info.nombre}</li>
        </ul>
        </Fragment>
    )
}

export default Detail;