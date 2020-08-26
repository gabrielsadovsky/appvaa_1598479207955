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
import { DateTimePicker } from "material-ui-pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import TeachersActions from "../redux/actions/TeachersActions";
import ClubsActions from "../redux/actions/ClubsActions";
import ClassesActions from "../redux/actions/ClassesActions";

// END IMPORT ACTIONS

/** APIs

* actionsTeachers.create
*	@description CRUD ACTION create
*
* actionsTeachers.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsTeachers.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsClubs.findBy_teacher
*	@description CRUD ACTION findBy_teacher
*	@param Objectid key - Id of model to search for
*
* actionsClasses.list
*	@description CRUD ACTION list
*
* actionsClubs.list
*	@description CRUD ACTION list
*

**/

class TeachersEdit extends Component {
  // Init teachers
  constructor(props) {
    super(props);
    this.state = {
      teachers: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsTeachers.loadTeachers(this.props.match.params.id);
      this.props.actionsClubs.findBy_teacher(this.props.match.params.id);
    }
    
    this.props.actionsClasses.loadClassesList();
    this.props.actionsClubs.loadClubsList();
  }

  // Insert props teachers in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      teachers: props.teachers
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.teachers._id) {
      this.props.actionsTeachers.saveTeachers(this.state.teachers).then(data => {
        this.props.history.push("/teacherses/");
      });
    } else {
      this.props.actionsTeachers.createTeachers(this.state.teachers).then(data => {
        this.props.history.push("/teacherses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Teachers Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <FormControlLabel
            control={
              <Switch
                id="auth_classes_students"
                checked={this.state.teachers.auth_classes_students || false}
                onChange={Utils.handleChangeCheck.bind(this, "teachers", "auth_classes_students")}
                color="primary"
                required
                {...(!this.state.teachers.auth_classes_students && this.state.teachers.auth_classes_students === ""
                  ? { error: true }
                  : {})}
              />
            }
            label="auth_classes_students"
            className="mt-20"
          />
          
          <DateTimePicker
            id="date_of_birth"
            label="Date_of_birth"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.teachers.date_of_birth
                ? new Date(this.state.teachers.date_of_birth)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "teachers", "date_of_birth")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.teachers.date_of_birth && this.state.teachers.date_of_birth === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.teachers.name || ""}
            onChange={Utils.handleChange.bind(this, "teachers")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.teachers.name && this.state.teachers.name === ""
              ? { error: true }
              : {})}
          />
          
          <FormControlLabel
            control={
              <Switch
                id="partner"
                checked={this.state.teachers.partner || false}
                onChange={Utils.handleChangeCheck.bind(this, "teachers", "partner")}
                color="primary"
                required
                {...(!this.state.teachers.partner && this.state.teachers.partner === ""
                  ? { error: true }
                  : {})}
              />
            }
            label="partner"
            className="mt-20"
          />
          
          
          <TextField
            id="password"
            label="Password"
            value={this.state.teachers.password || ""}
            onChange={Utils.handleChange.bind(this, "teachers")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.teachers.password && this.state.teachers.password === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="surname"
            label="Surname"
            value={this.state.teachers.surname || ""}
            onChange={Utils.handleChange.bind(this, "teachers")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.teachers.surname && this.state.teachers.surname === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="username"
            label="Username"
            value={this.state.teachers.username || ""}
            onChange={Utils.handleChange.bind(this, "teachers")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.teachers.username && this.state.teachers.username === ""
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
              value={this.state.teachers._class || ""}
              onChange={Utils.handleChangeSelect.bind(this, "teachers")}
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
          
          
          {/* Relation m:m _club with Clubs */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_club">_club</InputLabel>
            <Select
              multiple
              value={this.state.teachers._club || []}
              onChange={Utils.handleChangeSelect.bind(this, "teachers")}
              input={<Input id="_club" name="_club" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listClubs && this.props.listClubs.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.teachers._club &&
                      this.state.teachers._club.indexOf(item._id) === -1
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
          
          {/* External relation with Clubs */}
          
          <h3>Clubs</h3>
          {(!this.props.listClubs || this.props.listClubs.length === 0) && 
            <div>No Clubs associated</div>
          }
          {this.props.listClubs &&
            this.props.listClubs.map((item, i) => {
              return (
                <Link to={"/clubss/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/teacherses/">Back to list</Link>

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
    actionsTeachers: bindActionCreators(TeachersActions, dispatch),
    actionsClubs: bindActionCreators(ClubsActions, dispatch),
    actionsClasses: bindActionCreators(ClassesActions, dispatch),
  };
};

// Validate types
TeachersEdit.propTypes = { 
  actionsTeachers: PropTypes.object.isRequired,
  actionsClubs: PropTypes.object.isRequired,
  actionsClasses: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    teachers: state.TeachersEditReducer.teachers,
    listClasses: state.TeachersEditReducer.listClasses,
    listClubs: state.TeachersEditReducer.listClubs,
    listClubs: state.TeachersEditReducer.listClubs
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeachersEdit);
