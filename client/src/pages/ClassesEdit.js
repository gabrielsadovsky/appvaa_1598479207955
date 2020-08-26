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
import ClassesActions from "../redux/actions/ClassesActions";
import ClubsActions from "../redux/actions/ClubsActions";
import StudentsActions from "../redux/actions/StudentsActions";
import TeachersActions from "../redux/actions/TeachersActions";

// END IMPORT ACTIONS

/** APIs

* actionsClasses.create
*	@description CRUD ACTION create
*
* actionsClasses.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsClasses.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsClubs.list
*	@description CRUD ACTION list
*
* actionsClubs.list
*	@description CRUD ACTION list
*
* actionsClubs.findBy_class
*	@description CRUD ACTION findBy_class
*	@param Objectid key - Id of model to search for
*
* actionsStudents.findBy_class
*	@description CRUD ACTION findBy_class
*	@param Objectid key - Id of model to search for
*
* actionsTeachers.findBy_class
*	@description CRUD ACTION findBy_class
*	@param Objectid key - Id of model to search for
*

**/

class ClassesEdit extends Component {
  // Init classes
  constructor(props) {
    super(props);
    this.state = {
      classes: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsClasses.loadClasses(this.props.match.params.id);
      this.props.actionsTeachers.findBy_class(this.props.match.params.id);
      this.props.actionsStudents.findBy_class(this.props.match.params.id);
      this.props.actionsClubs.findBy_class(this.props.match.params.id);
    }
    
    this.props.actionsClubs.loadClubsList();
    this.props.actionsClubs.loadClubsList();
  }

  // Insert props classes in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      classes: props.classes
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.classes._id) {
      this.props.actionsClasses.saveClasses(this.state.classes).then(data => {
        this.props.history.push("/classeses/");
      });
    } else {
      this.props.actionsClasses.createClasses(this.state.classes).then(data => {
        this.props.history.push("/classeses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Classes Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="days"
            label="Days"
            value={this.state.classes.days || ""}
            onChange={Utils.handleChange.bind(this, "classes")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="vacancies"
            label="Vacancies"
            value={this.state.classes.vacancies || ""}
            onChange={Utils.handleChange.bind(this, "classes")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m _club with Clubs */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_club">_club</InputLabel>
            <Select
              multiple
              value={this.state.classes._club || []}
              onChange={Utils.handleChangeSelect.bind(this, "classes")}
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
                      this.state.classes._club &&
                      this.state.classes._club.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation m:m _student with Clubs */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_student">_student</InputLabel>
            <Select
              multiple
              value={this.state.classes._student || []}
              onChange={Utils.handleChangeSelect.bind(this, "classes")}
              input={<Input id="_student" name="_student" />}
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
                      this.state.classes._student &&
                      this.state.classes._student.indexOf(item._id) === -1
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
            <Link to="/classeses/">Back to list</Link>

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
    actionsClasses: bindActionCreators(ClassesActions, dispatch),
    actionsClubs: bindActionCreators(ClubsActions, dispatch),
    actionsStudents: bindActionCreators(StudentsActions, dispatch),
    actionsTeachers: bindActionCreators(TeachersActions, dispatch),
  };
};

// Validate types
ClassesEdit.propTypes = { 
  actionsClasses: PropTypes.object.isRequired,
  actionsClubs: PropTypes.object.isRequired,
  actionsStudents: PropTypes.object.isRequired,
  actionsTeachers: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    classes: state.ClassesEditReducer.classes,
    listClubs: state.ClassesEditReducer.listClubs,
    listClubs: state.ClassesEditReducer.listClubs,
    listTeachers: state.ClassesEditReducer.listTeachers,
    listStudents: state.ClassesEditReducer.listStudents,
    listClubs: state.ClassesEditReducer.listClubs
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassesEdit);
