import CountriesService from '../services/countries/CountriesService';
import {COUNTRIES_REQUEST, COUNTRIES_LOADED_COMPLETE , COUNTRIES_FAILS_TOLOAD, COUNTRY_DETAIL_SUCCESS, COUNTRY_LAND_SUCCESS} from './types';
import Countries from '../components/Countries/Countries';

export const Countries_request = () =>{

    return{
        type:COUNTRIES_REQUEST
    }
}

export const CountriesLoadedComplete = (Countryes= []) =>{
    
    return {
        type: COUNTRIES_LOADED_COMPLETE,
        payload: Countryes, 
        error: 'ninguno'
      }
}

export const CountriesLoadFails = (error:string) =>{
    return{
        type: COUNTRIES_FAILS_TOLOAD,
        payload: '',
        error: 'No se cargaron los paises por'+ error
    }
}

export const CountrySearchDetail = (countryes = Countries) =>{
    return{
        type:COUNTRY_DETAIL_SUCCESS,
        payload:countryes,
        error: ''
    }
}
export const CountryFilterComplete = (Countryes:any) =>{
    return {
        type: COUNTRY_LAND_SUCCESS,
        payload: Countryes,
        error: ''
    }
}




const Countries_Actions = (dato="") =>{
    return async (dispatch:any) =>{
        dispatch(Countries_request());
        if(dato !== ""){
            CountriesService.getCountries_Contient(dato)
            .then(response =>{      
                dato = response.data;  
                dispatch(CountriesLoadedComplete(response.data))
            }).catch(error =>{
                dispatch(CountriesLoadFails(error))
            });
        }else{
            CountriesService.getCountries()
            .then(response =>{
                dispatch(CountriesLoadedComplete(response.data))
            }).catch(error =>{
                dispatch(CountriesLoadFails(error))
            });
        }
        
     
    }
}

const Country_filter = (dato="") =>{
    return async (dispatch:any) =>{
        dispatch(Countries_request());
        CountriesService.getCountries().then(respuesta =>{
            const resutados = respuesta.data;
            const filter_movies = resutados.filter((country:any) => { 
                    return country.name.toLowerCase().includes((dato.toLowerCase())); 
            });
            dispatch(CountryFilterComplete(filter_movies));
        }).catch(error =>{
            dispatch(CountriesLoadFails(error))
        });
    }
}





const Country_search= (dato:string) =>{
    return async (dispatch:any)=>{
        dispatch(Countries_request());
        CountriesService.getCountry_detail(dato)
        .then(respuesta =>{
            dispatch(CountrySearchDetail(respuesta.data))
        }).catch(error =>{
            dispatch(CountriesLoadFails('ocurrio un error al buscar '+error))
        })
    }
}

export default {Countries_Actions, Country_search, Country_filter };