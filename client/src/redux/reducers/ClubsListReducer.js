// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function ClubsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_CLUBS_SUCCESS:
      return { ...state, clubs: action.payload };
    case types.LIST_CLUBS_SUCCESS:
      return { ...state, listClubs: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}