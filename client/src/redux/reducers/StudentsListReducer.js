// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function StudentsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_STUDENTS_SUCCESS:
      return { ...state, students: action.payload };
    case types.LIST_STUDENTS_SUCCESS:
      return { ...state, listStudents: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}