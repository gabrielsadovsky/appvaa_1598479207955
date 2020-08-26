import { combineReducers } from "redux";

// START IMPORT REDUCERS
import CitiesEditReducer from "./CitiesEditReducer";
import CitiesListReducer from "./CitiesListReducer";
import ClassesEditReducer from "./ClassesEditReducer";
import ClassesListReducer from "./ClassesListReducer";
import ClubsEditReducer from "./ClubsEditReducer";
import ClubsListReducer from "./ClubsListReducer";
import CountriesEditReducer from "./CountriesEditReducer";
import CountriesListReducer from "./CountriesListReducer";
import EventsEditReducer from "./EventsEditReducer";
import EventsListReducer from "./EventsListReducer";
import HomeReducer from "./HomeReducer";
import StatesEditReducer from "./StatesEditReducer";
import StatesListReducer from "./StatesListReducer";
import StudentsEditReducer from "./StudentsEditReducer";
import StudentsListReducer from "./StudentsListReducer";
import TeachersEditReducer from "./TeachersEditReducer";
import TeachersListReducer from "./TeachersListReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	CitiesEditReducer,
	CitiesListReducer,
	ClassesEditReducer,
	ClassesListReducer,
	ClubsEditReducer,
	ClubsListReducer,
	CountriesEditReducer,
	CountriesListReducer,
	EventsEditReducer,
	EventsListReducer,
	HomeReducer,
	StatesEditReducer,
	StatesListReducer,
	StudentsEditReducer,
	StudentsListReducer,
	TeachersEditReducer,
	TeachersListReducer,
	UserEditReducer,
	UserListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
