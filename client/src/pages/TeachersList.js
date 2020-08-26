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
import TeachersActions from "../redux/actions/TeachersActions";

// END IMPORT ACTIONS

/** APIs

* actionsTeachers.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsTeachers.list
*	@description CRUD ACTION list
*

**/


class TeachersList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsTeachers.loadTeachersList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsTeachers.deleteTeachers(this.state.idDelete).then(data => {
      this.props.actionsTeachers.loadTeachersList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "auth_classes_students",
        type: "boolean",
        label: "Auth_classes_students"
      }, 
      {
        id: "date_of_birth",
        type: "date",
        label: "Date_of_birth"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "partner",
        type: "boolean",
        label: "Partner"
      }, 
      {
        id: "password",
        type: "string",
        label: "Password"
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
    const link = "/teacherses/";

    return (
      <div>
        <h1>Teachers List</h1>

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
              <TableCell align="right">Auth_classes_students</TableCell>
              <TableCell align="right">Date_of_birth</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Partner</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Surname</TableCell>
              <TableCell align="right">Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/teacherses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.auth_classes_students }</TableCell>
                <TableCell align="right">{ row.date_of_birth }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.partner }</TableCell>
                <TableCell align="right">{ row.password }</TableCell>
                <TableCell align="right">{ row.surname }</TableCell>
                <TableCell align="right">{ row.username }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/teacherses/new">
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
    actionsTeachers: bindActionCreators(TeachersActions, dispatch),
  };
};

// Validate types
TeachersList.propTypes = { 
  actionsTeachers: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.TeachersListReducer.listTeachers
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeachersList);
