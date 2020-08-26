// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import CitiesEdit from "./pages/CitiesEdit";
import CitiesList from "./pages/CitiesList";
import ClassesEdit from "./pages/ClassesEdit";
import ClassesList from "./pages/ClassesList";
import ClubsEdit from "./pages/ClubsEdit";
import ClubsList from "./pages/ClubsList";
import CountriesEdit from "./pages/CountriesEdit";
import CountriesList from "./pages/CountriesList";
import EventsEdit from "./pages/EventsEdit";
import EventsList from "./pages/EventsList";
import StatesEdit from "./pages/StatesEdit";
import StatesList from "./pages/StatesList";
import StudentsEdit from "./pages/StudentsEdit";
import StudentsList from "./pages/StudentsList";
import TeachersEdit from "./pages/TeachersEdit";
import TeachersList from "./pages/TeachersList";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/citieses/:id" component={ CitiesEdit }  />
              <PrivateRoute exact path="/citieses" component={ CitiesList }  />
              <PrivateRoute exact path="/classeses/:id" component={ ClassesEdit }  />
              <PrivateRoute exact path="/classeses" component={ ClassesList }  />
              <PrivateRoute exact path="/clubses/:id" component={ ClubsEdit }  />
              <PrivateRoute exact path="/clubses" component={ ClubsList }  />
              <PrivateRoute exact path="/countrieses/:id" component={ CountriesEdit }  />
              <PrivateRoute exact path="/countrieses" component={ CountriesList }  />
              <PrivateRoute exact path="/eventses/:id" component={ EventsEdit }  />
              <PrivateRoute exact path="/eventses" component={ EventsList }  />
              <PrivateRoute exact path="/stateses/:id" component={ StatesEdit }  />
              <PrivateRoute exact path="/stateses" component={ StatesList }  />
              <PrivateRoute exact path="/studentses/:id" component={ StudentsEdit }  />
              <PrivateRoute exact path="/studentses" component={ StudentsList }  />
              <PrivateRoute exact path="/teacherses/:id" component={ TeachersEdit }  />
              <PrivateRoute exact path="/teacherses" component={ TeachersList }  />
              <PrivateRoute exact path="/users/:id" component={ UserEdit }  />
              <PrivateRoute exact path="/users" component={ UserList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;