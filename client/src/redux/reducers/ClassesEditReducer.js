// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  classes: {}
};

// Reducer
export default function ClassesEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_CLASSES_SUCCESS:
      return { ...state, classes: action.payload };
    case types.UPDATE_CLASSES_SUCCESS:
      return { ...state, classes: action.payload };
    case types.GET_CLASSES_SUCCESS:
      return { ...state, classes: action.payload };
    case types.LIST_CLUBS_SUCCESS:
      return { ...state, listClubs: action.payload };
    case types.LIST_CLUBS_SUCCESS:
      return { ...state, listClubs: action.payload };
    case types.FINDBY_CLASS_CLUBS_SUCCESS:
      return { ...state, listClubs: action.payload };
    case types.FINDBY_CLASS_STUDENTS_SUCCESS:
      return { ...state, listStudents: action.payload };
    case types.FINDBY_CLASS_TEACHERS_SUCCESS:
      return { ...state, listTeachers: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}