import React, { useEffect, Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '../../redux/Actions'; 
type TParams = { pais: string };
const Detail = ({match}: RouteComponentProps<TParams>) =>{

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.Country_search(match.params.pais));
    
    }, [dispatch, match.params.pais]);

    const Country = useSelector<any, any>((state:any) => {
        return {
            pais: state.Country_list.country,
            loading: state.Country_list.loading
        }
    });

   
   
    return(
        <Fragment>
        <h2>hola</h2>
        <ul>
        {Country.loading === false ? <Fragment>cARFGANDO</Fragment>: Country.pais.map((index:any) =>(
         <li key={index.name}>{index.name}</li>      
        ))}
        </ul>
        </Fragment>
    )
}

export default Detail;