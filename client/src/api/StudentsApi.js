import StudentsApiGenerated from "./generated/StudentsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class StudentsApi extends StudentsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Students List
  static getStudentsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/studentss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default StudentsApi;