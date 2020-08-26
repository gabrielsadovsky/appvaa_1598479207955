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
import StudentsActions from "../redux/actions/StudentsActions";
import ClassesActions from "../redux/actions/ClassesActions";
import ClubsActions from "../redux/actions/ClubsActions";

// END IMPORT ACTIONS

/** APIs

* actionsStudents.create
*	@description CRUD ACTION create
*
* actionsStudents.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsStudents.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsClasses.list
*	@description CRUD ACTION list
*
* actionsClubs.list
*	@description CRUD ACTION list
*

**/

class StudentsEdit extends Component {
  // Init students
  constructor(props) {
    super(props);
    this.state = {
      students: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsStudents.loadStudents(this.props.match.params.id);
    }
    
    this.props.actionsClasses.loadClassesList();
    this.props.actionsClubs.loadClubsList();
  }

  // Insert props students in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      students: props.students
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.students._id) {
      this.props.actionsStudents.saveStudents(this.state.students).then(data => {
        this.props.history.push("/studentses/");
      });
    } else {
      this.props.actionsStudents.createStudents(this.state.students).then(data => {
        this.props.history.push("/studentses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Students Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <DateTimePicker
            id="date_of_birth"
            label="Date_of_birth"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.students.date_of_birth
                ? new Date(this.state.students.date_of_birth)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "students", "date_of_birth")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.students.date_of_birth && this.state.students.date_of_birth === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="facebook"
            label="Facebook"
            value={this.state.students.facebook || ""}
            onChange={Utils.handleChange.bind(this, "students")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="instagram"
            label="Instagram"
            value={this.state.students.instagram || ""}
            onChange={Utils.handleChange.bind(this, "students")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.students.name || ""}
            onChange={Utils.handleChange.bind(this, "students")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.students.name && this.state.students.name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="password"
            label="Password"
            value={this.state.students.password || ""}
            onChange={Utils.handleChange.bind(this, "students")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.students.password && this.state.students.password === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="position_secundary"
            label="Position_secundary"
            value={this.state.students.position_secundary || ""}
            onChange={Utils.handleChange.bind(this, "students")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.students.position_secundary && this.state.students.position_secundary === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="position_usual"
            label="Position_usual"
            value={this.state.students.position_usual || ""}
            onChange={Utils.handleChange.bind(this, "students")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.students.position_usual && this.state.students.position_usual === ""
              ? { error: true }
              : {})}
          />
          
          <FormControlLabel
            control={
              <Switch
                id="steer"
                checked={this.state.students.steer || false}
                onChange={Utils.handleChangeCheck.bind(this, "students", "steer")}
                color="primary"
                required
                {...(!this.state.students.steer && this.state.students.steer === ""
                  ? { error: true }
                  : {})}
              />
            }
            label="steer"
            className="mt-20"
          />
          
          
          <TextField
            id="surname"
            label="Surname"
            value={this.state.students.surname || ""}
            onChange={Utils.handleChange.bind(this, "students")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.students.surname && this.state.students.surname === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="username"
            label="Username"
            value={this.state.students.username || ""}
            onChange={Utils.handleChange.bind(this, "students")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.students.username && this.state.students.username === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m _class with Classes */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_class">_class</InputLabel>
            <Select
              multiple
              value={this.state.students._class || []}
              onChange={Utils.handleChangeSelect.bind(this, "students")}
              input={<Input id="_class" name="_class" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listClasses && this.props.listClasses.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.students._class &&
                      this.state.students._class.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation m:m _club with Clubs */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_club">_club</InputLabel>
            <Select
              multiple
              value={this.state.students._club || []}
              onChange={Utils.handleChangeSelect.bind(this, "students")}
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
                      this.state.students._club &&
                      this.state.students._club.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/studentses/">Back to list</Link>

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
    actionsStudents: bindActionCreators(StudentsActions, dispatch),
    actionsClasses: bindActionCreators(ClassesActions, dispatch),
    actionsClubs: bindActionCreators(ClubsActions, dispatch),
  };
};

// Validate types
StudentsEdit.propTypes = { 
  actionsStudents: PropTypes.object.isRequired,
  actionsClasses: PropTypes.object.isRequired,
  actionsClubs: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    students: state.StudentsEditReducer.students,
    listClasses: state.StudentsEditReducer.listClasses,
    listClubs: state.StudentsEditReducer.listClubs
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsEdit);
