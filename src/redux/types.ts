export const COUNTRIES_REQUEST = 'COUNTRIES_REQUEST';
export const COUNTRIES_LOADED_COMPLETE = 'COUNTRIES_LOADED_COMPLETE';
export const COUNTRIES_FAILS_TOLOAD = 'COUNTRIES_FAILS_TOLOAD';
export const COUNTRY_DETAIL_SUCCESS = 'COUNTRY_DETAIL_SUCCESS';
export const COUNTRY_LAND_SUCCESS = 'COUNTRY_LAND_SUCCESS';

export interface Countries {
    name: string,
    region:string,
    flag: string
}

export interface CountryState {
    countries: any,
    loading: boolean, 
    error: ''
}

interface CountryCompleteAction {
    type: typeof COUNTRIES_LOADED_COMPLETE
    payload: Countries,
    error: ''
  }

  interface CountryLandSuccessAction{
    type: typeof COUNTRY_LAND_SUCCESS,
    payload: Countries,
    error: ''
  }

  interface CountryDetailAction{
    type: typeof COUNTRY_DETAIL_SUCCESS,
    payload: Countries
  }
  
  interface FailsMessageAction {
    type: typeof COUNTRIES_FAILS_TOLOAD
    payload: ''
  }

  interface CountryRequest {
    type: typeof COUNTRIES_REQUEST,
    payload: ''
  }


export type CountryAction = CountryCompleteAction | FailsMessageAction | CountryRequest| CountryDetailAction| CountryLandSuccessAction;