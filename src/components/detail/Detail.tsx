import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Action  from '../../redux/Actions'
import './Detail.scss';
const Detail = () =>{

    const location = useLocation();
    const myparam:any = location.state;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Action.Country_search(myparam.land.capital))
    }, [dispatch, myparam.land.capital]);

    const data = useSelector<any, any>((state:any) => {
        return {
            pais: state.Country_list.countryGet
        }
    });
   
    return(
   
        <div className="row mt-2">
           
        {
            data.pais.map((dato:any) => (
                <Fragment key={dato.name}>
                 
                <div className="col-sm-12 col-md-5 col-xl-5">
                <a className="btn btn-dark btn-sm ml-2 float-left" href="/countries">Atras</a>
                    <img className="bandera mt-2 ml-1" src={dato.flag} alt={dato.name}  />
                </div>
                <div className="col-sm-12 col-md-6 col-xl-6 mt-4">
            
                        <h3>{dato.name}</h3>
                        <br />
                        <p className="text-justify"><b>Capital:</b> {dato.capital}</p>
                        <p className="text-justify"><b>Continente:</b> {dato.region}</p>
                        <p className="text-justify"><b>Habitantes:</b> {dato.population}</p>           
                      
                          <p><b>Idioma/s:</b> 
                          <ul>
                          {
                            dato.languages.map((idiomas:any)=> (
                                <li key={idiomas.iso639_1} className="text-justify"> {idiomas.name}</li>    
                            ))
                             }
                            </ul>
                          
                          </p> 
                         
                            
                       
                </div>
                </Fragment>
            ))
        }


        </div>
  
    )
}

export default Detail;