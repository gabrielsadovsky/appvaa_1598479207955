// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import ClubsActions from "../redux/actions/ClubsActions";

// END IMPORT ACTIONS

/** APIs

* actionsClubs.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsClubs.list
*	@description CRUD ACTION list
*

**/


class ClubsList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsClubs.loadClubsList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsClubs.deleteClubs(this.state.idDelete).then(data => {
      this.props.actionsClubs.loadClubsList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "canoe_oc1",
        type: "number",
        label: "Canoe_oc1"
      }, 
      {
        id: "canoe_oc2",
        type: "number",
        label: "Canoe_oc2"
      }, 
      {
        id: "canoe_oc6",
        type: "number",
        label: "Canoe_oc6"
      }, 
      {
        id: "canoe_oc6_7",
        type: "number",
        label: "Canoe_oc6_7"
      }, 
      {
        id: "canoe_v1",
        type: "number",
        label: "Canoe_v1"
      }, 
      {
        id: "canoe_v3",
        type: "number",
        label: "Canoe_v3"
      }, 
      {
        id: "canoe_v6",
        type: "number",
        label: "Canoe_v6"
      }, 
      {
        id: "city",
        type: "string",
        label: "City"
      }, 
      {
        id: "country",
        type: "string",
        label: "Country"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "schedule",
        type: "number",
        label: "Schedule"
      }, 
      {
        id: "state",
        type: "string",
        label: "State"
      }, 
      {
        id: "street",
        type: "string",
        label: "Street"
      },
    ];
    const link = "/clubses/";

    return (
      <div>
        <h1>Clubs List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Canoe_oc1</TableCell>
              <TableCell align="right">Canoe_oc2</TableCell>
              <TableCell align="right">Canoe_oc6</TableCell>
              <TableCell align="right">Canoe_oc6_7</TableCell>
              <TableCell align="right">Canoe_v1</TableCell>
              <TableCell align="right">Canoe_v3</TableCell>
              <TableCell align="right">Canoe_v6</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Schedule</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Street</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/clubses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.canoe_oc1 }</TableCell>
                <TableCell align="right">{ row.canoe_oc2 }</TableCell>
                <TableCell align="right">{ row.canoe_oc6 }</TableCell>
                <TableCell align="right">{ row.canoe_oc6_7 }</TableCell>
                <TableCell align="right">{ row.canoe_v1 }</TableCell>
                <TableCell align="right">{ row.canoe_v3 }</TableCell>
                <TableCell align="right">{ row.canoe_v6 }</TableCell>
                <TableCell align="right">{ row.city }</TableCell>
                <TableCell align="right">{ row.country }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.schedule }</TableCell>
                <TableCell align="right">{ row.state }</TableCell>
                <TableCell align="right">{ row.street }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/clubses/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsClubs: bindActionCreators(ClubsActions, dispatch),
  };
};

// Validate types
ClubsList.propTypes = { 
  actionsClubs: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.ClubsListReducer.listClubs
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClubsList);
