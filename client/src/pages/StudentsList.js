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
import StudentsActions from "../redux/actions/StudentsActions";

// END IMPORT ACTIONS

/** APIs

* actionsStudents.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsStudents.list
*	@description CRUD ACTION list
*

**/


class StudentsList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsStudents.loadStudentsList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsStudents.deleteStudents(this.state.idDelete).then(data => {
      this.props.actionsStudents.loadStudentsList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "date_of_birth",
        type: "date",
        label: "Date_of_birth"
      }, 
      {
        id: "facebook",
        type: "string",
        label: "Facebook"
      }, 
      {
        id: "instagram",
        type: "string",
        label: "Instagram"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "password",
        type: "string",
        label: "Password"
      }, 
      {
        id: "position_secundary",
        type: "number",
        label: "Position_secundary"
      }, 
      {
        id: "position_usual",
        type: "number",
        label: "Position_usual"
      }, 
      {
        id: "steer",
        type: "boolean",
        label: "Steer"
      }, 
      {
        id: "surname",
        type: "string",
        label: "Surname"
      }, 
      {
        id: "username",
        type: "string",
        label: "Username"
      },
    ];
    const link = "/studentses/";

    return (
      <div>
        <h1>Students List</h1>

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
              <TableCell align="right">Date_of_birth</TableCell>
              <TableCell align="right">Facebook</TableCell>
              <TableCell align="right">Instagram</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Position_secundary</TableCell>
              <TableCell align="right">Position_usual</TableCell>
              <TableCell align="right">Steer</TableCell>
              <TableCell align="right">Surname</TableCell>
              <TableCell align="right">Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/studentses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.date_of_birth }</TableCell>
                <TableCell align="right">{ row.facebook }</TableCell>
                <TableCell align="right">{ row.instagram }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.password }</TableCell>
                <TableCell align="right">{ row.position_secundary }</TableCell>
                <TableCell align="right">{ row.position_usual }</TableCell>
                <TableCell align="right">{ row.steer }</TableCell>
                <TableCell align="right">{ row.surname }</TableCell>
                <TableCell align="right">{ row.username }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/studentses/new">
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
    actionsStudents: bindActionCreators(StudentsActions, dispatch),
  };
};

// Validate types
StudentsList.propTypes = { 
  actionsStudents: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.StudentsListReducer.listStudents
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsList);
