// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function EventsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_EVENTS_SUCCESS:
      return { ...state, events: action.payload };
    case types.LIST_EVENTS_SUCCESS:
      return { ...state, listEvents: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}