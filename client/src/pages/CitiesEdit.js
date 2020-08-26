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
import CitiesActions from "../redux/actions/CitiesActions";

// END IMPORT ACTIONS

/** APIs

* actionsCities.create
*	@description CRUD ACTION create
*
* actionsCities.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsCities.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class CitiesEdit extends Component {
  // Init cities
  constructor(props) {
    super(props);
    this.state = {
      cities: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCities.loadCities(this.props.match.params.id);
    }
    
  }

  // Insert props cities in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      cities: props.cities
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.cities._id) {
      this.props.actionsCities.saveCities(this.state.cities).then(data => {
        this.props.history.push("/citieses/");
      });
    } else {
      this.props.actionsCities.createCities(this.state.cities).then(data => {
        this.props.history.push("/citieses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Cities Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="name"
            label="Name"
            value={this.state.cities.name || ""}
            onChange={Utils.handleChange.bind(this, "cities")}
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/citieses/">Back to list</Link>

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
    actionsCities: bindActionCreators(CitiesActions, dispatch),
  };
};

// Validate types
CitiesEdit.propTypes = { 
  actionsCities: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    cities: state.CitiesEditReducer.cities
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesEdit);
