// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import ClubsActions from "../redux/actions/ClubsActions";
import ClassesActions from "../redux/actions/ClassesActions";
import EventsActions from "../redux/actions/EventsActions";
import TeachersActions from "../redux/actions/TeachersActions";
import StudentsActions from "../redux/actions/StudentsActions";

// END IMPORT ACTIONS

/** APIs

* actionsClubs.create
*	@description CRUD ACTION create
*
* actionsClubs.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsClubs.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsClasses.findBy_club
*	@description CRUD ACTION findBy_club
*	@param Objectid key - Id of model to search for
*
* actionsClasses.findBy_student
*	@description CRUD ACTION findBy_student
*	@param Objectid key - Id of model to search for
*
* actionsEvents.findBy_club
*	@description CRUD ACTION findBy_club
*	@param Objectid key - Id of model to search for
*
* actionsClasses.list
*	@description CRUD ACTION list
*
* actionsTeachers.list
*	@description CRUD ACTION list
*
* actionsStudents.findBy_club
*	@description CRUD ACTION findBy_club
*	@param Objectid key - Id of model to search for
*
* actionsTeachers.findBy_club
*	@description CRUD ACTION findBy_club
*	@param Objectid key - Id of model to search for
*

**/

class ClubsEdit extends Component {
  // Init clubs
  constructor(props) {
    super(props);
    this.state = {
      clubs: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsClubs.loadClubs(this.props.match.params.id);
      this.props.actionsClasses.findBy_club(this.props.match.params.id);
      this.props.actionsTeachers.findBy_club(this.props.match.params.id);
      this.props.actionsStudents.findBy_club(this.props.match.params.id);
      this.props.actionsEvents.findBy_club(this.props.match.params.id);
      this.props.actionsClasses.findBy_student(this.props.match.params.id);
    }
    
    this.props.actionsClasses.loadClassesList();
    this.props.actionsTeachers.loadTeachersList();
  }

  // Insert props clubs in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      clubs: props.clubs
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.clubs._id) {
      this.props.actionsClubs.saveClubs(this.state.clubs).then(data => {
        this.props.history.push("/clubses/");
      });
    } else {
      this.props.actionsClubs.createClubs(this.state.clubs).then(data => {
        this.props.history.push("/clubses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Clubs Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="canoe_oc1"
            label="Canoe_oc1"
            value={this.state.clubs.canoe_oc1 || ""}
            onChange={Utils.handleChange.bind(this, "clubs")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="canoe_oc2"
            label="Canoe_oc2"
            value={this.state.clubs.canoe_oc2 || ""}
            onChange={Utils.handleChange.bind(this, "clubs")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="canoe_oc6"
            label="Canoe_oc6"
            value={this.state.clubs.canoe_oc6 || ""}
            onChange={Utils.handleChange.bind(this, "clubs")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="canoe_oc6_7"
            label="Canoe_oc6_7"
            value={this.state.clubs.canoe_oc6_7 || ""}
            onChange={Utils.handleChange.bind(this, "clubs")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="canoe_v1"
            label="Canoe_v1"
            value={this.state.clubs.canoe_v1 || ""}
            onChange={Utils.handleChange.bind(this, "clubs")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="canoe_v3"
            label="Canoe_v3"
            value={this.state.clubs.canoe_v3 || ""}
            onChange={Utils.handleChange.bind(this, "clubs")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="canoe_v6"
            label="Canoe_v6"
            value={this.state.clubs.canoe_v6 || ""}
            onChange={Utils.handleChange.bind(this, "clubs")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="city"
            label="City"
            value={this.state.clubs.city || ""}
            onChange={Utils.handleChange.bind(this, "clubs")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.clubs.city && this.state.clubs.city === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="country"
            label="Country"
            value={this.state.clubs.country || ""}
            onChange={Utils.handleChange.bind(this, "clubs")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.clubs.country && this.state.clubs.country === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.clubs.name || ""}
            onChange={Utils.handleChange.bind(this, "clubs")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.clubs.name && this.state.clubs.name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="schedule"
            label="Schedule"
            value={this.state.clubs.schedule || ""}
            onChange={Utils.handleChange.bind(this, "clubs")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.clubs.schedule && this.state.clubs.schedule === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="state"
            label="State"
            value={this.state.clubs.state || ""}
            onChange={Utils.handleChange.bind(this, "clubs")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.clubs.state && this.state.clubs.state === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="street"
            label="Street"
            value={this.state.clubs.street || ""}
            onChange={Utils.handleChange.bind(this, "clubs")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.clubs.street && this.state.clubs.street === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m _class with Classes */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_class">
              _class
            </InputLabel>
            <Select
              value={this.state.clubs._class || ""}
              onChange={Utils.handleChangeSelect.bind(this, "clubs")}
              inputProps={{
                id: "_class",
                name: "_class"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listClasses && this.props.listClasses.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation m:m _teacher with Teachers */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_teacher">_teacher</InputLabel>
            <Select
              multiple
              value={this.state.clubs._teacher || []}
              onChange={Utils.handleChangeSelect.bind(this, "clubs")}
              input={<Input id="_teacher" name="_teacher" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listTeachers && this.props.listTeachers.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.clubs._teacher &&
                      this.state.clubs._teacher.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Classes */}
          
          <h3>Classes</h3>
          {(!this.props.listClasses || this.props.listClasses.length === 0) && 
            <div>No Classes associated</div>
          }
          {this.props.listClasses &&
            this.props.listClasses.map((item, i) => {
              return (
                <Link to={"/classess/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with Teachers */}
          
          <h3>Teachers</h3>
          {(!this.props.listTeachers || this.props.listTeachers.length === 0) && 
            <div>No Teachers associated</div>
          }
          {this.props.listTeachers &&
            this.props.listTeachers.map((item, i) => {
              return (
                <Link to={"/teacherss/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with Students */}
          
          <h3>Students</h3>
          {(!this.props.listStudents || this.props.listStudents.length === 0) && 
            <div>No Students associated</div>
          }
          {this.props.listStudents &&
            this.props.listStudents.map((item, i) => {
              return (
                <Link to={"/studentss/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with Events */}
          
          <h3>Events</h3>
          {(!this.props.listEvents || this.props.listEvents.length === 0) && 
            <div>No Events associated</div>
          }
          {this.props.listEvents &&
            this.props.listEvents.map((item, i) => {
              return (
                <Link to={"/eventss/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with Classes */}
          
          <h3>Classes</h3>
          {(!this.props.listClasses || this.props.listClasses.length === 0) && 
            <div>No Classes associated</div>
          }
          {this.props.listClasses &&
            this.props.listClasses.map((item, i) => {
              return (
                <Link to={"/classess/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/clubses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsClubs: bindActionCreators(ClubsActions, dispatch),
    actionsClasses: bindActionCreators(ClassesActions, dispatch),
    actionsEvents: bindActionCreators(EventsActions, dispatch),
    actionsTeachers: bindActionCreators(TeachersActions, dispatch),
    actionsStudents: bindActionCreators(StudentsActions, dispatch),
  };
};

// Validate types
ClubsEdit.propTypes = { 
  actionsClubs: PropTypes.object.isRequired,
  actionsClasses: PropTypes.object.isRequired,
  actionsEvents: PropTypes.object.isRequired,
  actionsTeachers: PropTypes.object.isRequired,
  actionsStudents: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    clubs: state.ClubsEditReducer.clubs,
    listClasses: state.ClubsEditReducer.listClasses,
    listTeachers: state.ClubsEditReducer.listTeachers,
    listClasses: state.ClubsEditReducer.listClasses,
    listTeachers: state.ClubsEditReducer.listTeachers,
    listStudents: state.ClubsEditReducer.listStudents,
    listEvents: state.ClubsEditReducer.listEvents,
    listClasses: state.ClubsEditReducer.listClasses
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClubsEdit);
