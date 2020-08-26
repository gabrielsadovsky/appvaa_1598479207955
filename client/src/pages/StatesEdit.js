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

// Custom Actions


// START IMPORT ACTIONS
import StatesActions from "../redux/actions/StatesActions";

// END IMPORT ACTIONS

/** APIs

* actionsStates.create
*	@description CRUD ACTION create
*
* actionsStates.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsStates.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class StatesEdit extends Component {
  // Init states
  constructor(props) {
    super(props);
    this.state = {
      states: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsStates.loadStates(this.props.match.params.id);
    }
    
  }

  // Insert props states in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      states: props.states
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.states._id) {
      this.props.actionsStates.saveStates(this.state.states).then(data => {
        this.props.history.push("/stateses/");
      });
    } else {
      this.props.actionsStates.createStates(this.state.states).then(data => {
        this.props.history.push("/stateses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>States Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="name"
            label="Name"
            value={this.state.states.name || ""}
            onChange={Utils.handleChange.bind(this, "states")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.states.name && this.state.states.name === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/stateses/">Back to list</Link>

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
    actionsStates: bindActionCreators(StatesActions, dispatch),
  };
};

// Validate types
StatesEdit.propTypes = { 
  actionsStates: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    states: state.StatesEditReducer.states
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatesEdit);
