// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function CountriesListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_COUNTRIES_SUCCESS:
      return { ...state, countries: action.payload };
    case types.LIST_COUNTRIES_SUCCESS:
      return { ...state, listCountries: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}