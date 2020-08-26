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
import CountriesActions from "../redux/actions/CountriesActions";

// END IMPORT ACTIONS

/** APIs

* actionsCountries.create
*	@description CRUD ACTION create
*
* actionsCountries.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsCountries.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class CountriesEdit extends Component {
  // Init countries
  constructor(props) {
    super(props);
    this.state = {
      countries: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCountries.loadCountries(this.props.match.params.id);
    }
    
  }

  // Insert props countries in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      countries: props.countries
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.countries._id) {
      this.props.actionsCountries.saveCountries(this.state.countries).then(data => {
        this.props.history.push("/countrieses/");
      });
    } else {
      this.props.actionsCountries.createCountries(this.state.countries).then(data => {
        this.props.history.push("/countrieses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Countries Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="name"
            label="Name"
            value={this.state.countries.name || ""}
            onChange={Utils.handleChange.bind(this, "countries")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.countries.name && this.state.countries.name === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/countrieses/">Back to list</Link>

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
    actionsCountries: bindActionCreators(CountriesActions, dispatch),
  };
};

// Validate types
CountriesEdit.propTypes = { 
  actionsCountries: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    countries: state.CountriesEditReducer.countries
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesEdit);
