// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  teachers: {}
};

// Reducer
export default function TeachersEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_TEACHERS_SUCCESS:
      return { ...state, teachers: action.payload };
    case types.UPDATE_TEACHERS_SUCCESS:
      return { ...state, teachers: action.payload };
    case types.GET_TEACHERS_SUCCESS:
      return { ...state, teachers: action.payload };
    case types.FINDBY_TEACHER_CLUBS_SUCCESS:
      return { ...state, listClubs: action.payload };
    case types.LIST_CLASSES_SUCCESS:
      return { ...state, listClasses: action.payload };
    case types.LIST_CLUBS_SUCCESS:
      return { ...state, listClubs: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}