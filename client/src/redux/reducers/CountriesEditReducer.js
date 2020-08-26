// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  countries: {}
};

// Reducer
export default function CountriesEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_COUNTRIES_SUCCESS:
      return { ...state, countries: action.payload };
    case types.UPDATE_COUNTRIES_SUCCESS:
      return { ...state, countries: action.payload };
    case types.GET_COUNTRIES_SUCCESS:
      return { ...state, countries: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}