// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function ClassesListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_CLASSES_SUCCESS:
      return { ...state, classes: action.payload };
    case types.LIST_CLASSES_SUCCESS:
      return { ...state, listClasses: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}