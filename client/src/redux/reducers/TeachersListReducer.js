// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function TeachersListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_TEACHERS_SUCCESS:
      return { ...state, teachers: action.payload };
    case types.LIST_TEACHERS_SUCCESS:
      return { ...state, listTeachers: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}