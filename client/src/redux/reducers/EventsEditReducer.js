// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  events: {}
};

// Reducer
export default function EventsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_EVENTS_SUCCESS:
      return { ...state, events: action.payload };
    case types.UPDATE_EVENTS_SUCCESS:
      return { ...state, events: action.payload };
    case types.GET_EVENTS_SUCCESS:
      return { ...state, events: action.payload };
    case types.LIST_CLUBS_SUCCESS:
      return { ...state, listClubs: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}