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
import EventsActions from "../redux/actions/EventsActions";
import ClubsActions from "../redux/actions/ClubsActions";

// END IMPORT ACTIONS

/** APIs

* actionsEvents.create
*	@description CRUD ACTION create
*
* actionsEvents.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsEvents.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsClubs.list
*	@description CRUD ACTION list
*

**/

class EventsEdit extends Component {
  // Init events
  constructor(props) {
    super(props);
    this.state = {
      events: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsEvents.loadEvents(this.props.match.params.id);
    }
    
    this.props.actionsClubs.loadClubsList();
  }

  // Insert props events in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      events: props.events
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.events._id) {
      this.props.actionsEvents.saveEvents(this.state.events).then(data => {
        this.props.history.push("/eventses/");
      });
    } else {
      this.props.actionsEvents.createEvents(this.state.events).then(data => {
        this.props.history.push("/eventses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Events Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="name"
            label="Name"
            value={this.state.events.name || ""}
            onChange={Utils.handleChange.bind(this, "events")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.events.name && this.state.events.name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="vacancies"
            label="Vacancies"
            value={this.state.events.vacancies || ""}
            onChange={Utils.handleChange.bind(this, "events")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.events.vacancies && this.state.events.vacancies === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m _club with Clubs */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_club">_club</InputLabel>
            <Select
              multiple
              value={this.state.events._club || []}
              onChange={Utils.handleChangeSelect.bind(this, "events")}
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
                      this.state.events._club &&
                      this.state.events._club.indexOf(item._id) === -1
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
            <Link to="/eventses/">Back to list</Link>

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
    actionsEvents: bindActionCreators(EventsActions, dispatch),
    actionsClubs: bindActionCreators(ClubsActions, dispatch),
  };
};

// Validate types
EventsEdit.propTypes = { 
  actionsEvents: PropTypes.object.isRequired,
  actionsClubs: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    events: state.EventsEditReducer.events,
    listClubs: state.EventsEditReducer.listClubs
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsEdit);
