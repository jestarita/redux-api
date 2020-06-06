import {COUNTRIES_LOADED_COMPLETE, COUNTRIES_FAILS_TOLOAD, COUNTRIES_REQUEST,
  COUNTRY_DETAIL_SUCCESS,COUNTRY_LAND_SUCCESS,  CountryAction} from './types'

const CountryState = {
  countries: [],
  loading: false,
  error: '',
  countryGet: []
}

export const CountriesReducer = (state = CountryState, action:CountryAction) => {

    switch (action.type) {

        case COUNTRIES_REQUEST:
        return{
            ...state
        }
          
        case COUNTRIES_LOADED_COMPLETE:
            
          return{
            ...state,
            countries: action.payload,
            loading:true,
            error: action.error
          }

          case COUNTRY_LAND_SUCCESS:
            return{
              ...state,
              countries:action.payload,
              loading: true,
              error: action.error
            }

          case COUNTRY_DETAIL_SUCCESS:
            return{
              ...state,
              countryGet:action.payload,
              loading: true,
              error: ''
            }

          case COUNTRIES_FAILS_TOLOAD:

          return{
            ...state,
              countries :[],
              loading:false,
              error: action.payload
          }
    
        default:
           return state;
    }

}
