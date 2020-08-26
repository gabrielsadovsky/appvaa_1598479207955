// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  clubs: {}
};

// Reducer
export default function ClubsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_CLUBS_SUCCESS:
      return { ...state, clubs: action.payload };
    case types.UPDATE_CLUBS_SUCCESS:
      return { ...state, clubs: action.payload };
    case types.GET_CLUBS_SUCCESS:
      return { ...state, clubs: action.payload };
    case types.FINDBY_CLUB_CLASSES_SUCCESS:
      return { ...state, listClasses: action.payload };
    case types.FINDBY_STUDENT_CLASSES_SUCCESS:
      return { ...state, listClasses: action.payload };
    case types.FINDBY_CLUB_EVENTS_SUCCESS:
      return { ...state, listEvents: action.payload };
    case types.LIST_CLASSES_SUCCESS:
      return { ...state, listClasses: action.payload };
    case types.LIST_TEACHERS_SUCCESS:
      return { ...state, listTeachers: action.payload };
    case types.FINDBY_CLUB_STUDENTS_SUCCESS:
      return { ...state, listStudents: action.payload };
    case types.FINDBY_CLUB_TEACHERS_SUCCESS:
      return { ...state, listTeachers: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}