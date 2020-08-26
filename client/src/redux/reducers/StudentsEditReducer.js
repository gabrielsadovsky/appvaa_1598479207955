// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  students: {}
};

// Reducer
export default function StudentsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_STUDENTS_SUCCESS:
      return { ...state, students: action.payload };
    case types.UPDATE_STUDENTS_SUCCESS:
      return { ...state, students: action.payload };
    case types.GET_STUDENTS_SUCCESS:
      return { ...state, students: action.payload };
    case types.LIST_CLASSES_SUCCESS:
      return { ...state, listClasses: action.payload };
    case types.LIST_CLUBS_SUCCESS:
      return { ...state, listClubs: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}