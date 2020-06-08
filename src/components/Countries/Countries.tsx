import React, {useEffect, Fragment } from 'react';
import Countries_Actions from '../../redux/Actions';
import {useDispatch, useSelector} from 'react-redux';
import Movies from '../Movies/Movies';
import ListCountries from '../Countries_List/ListCountries';
import './Countries.scss';


const Countries = () =>{
  
    const Countries = useSelector<any, any>((state:any) => {
        return {
            paises: state.Country_list.countries,
            loading: state.Country_list.loading
        }
    });
  
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Countries_Actions.Countries_Actions());
       
    },[dispatch]);
return (
    <Fragment>
      <div className="row">
          <div className="col-sm-12 col-md-12 col-xl-12">
          <div className="card mt-4 tarjeta">

            <h3 className="text-center">Buscadores</h3>
            <div className="card-body">
                    <div className="form-grup row ">
                    <label className="ml-3 mt-2">Continentes</label>   
                    <select className="form-control col-sm-3 ml-2 float-left"  onChange={event=> {
                        dispatch(Countries_Actions.Countries_Actions(event.target.value));
                     }}>
                        <option value="">---seleccione --</option>
                        <option value="europe">Europa</option>
                        <option value="asia">Asia</option>
                        <option value="americas">America</option>
                        <option value="Africa">Africa</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    <label className=" ml-3 mt-2">Nombre pais</label>   
                    <input type="text" className="form-control col-sm-3 ml-2 float-left" id="name" onChange={event=> {
                        dispatch(Countries_Actions.Country_filter(event.target.value));
                     }}   />
                </div>
            </div>
            </div>
          </div>
        {Countries.loading === false  ? <Movies.Loading />: Countries.paises.map((land:any) =>(
                <ListCountries key={land.alpha3Code}  dato={land} />
        ))}
      </div> 
    </Fragment>

)

}

export default Countries;