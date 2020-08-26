import TeachersApiGenerated from "./generated/TeachersApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class TeachersApi extends TeachersApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Teachers List
  static getTeachersList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/teacherss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default TeachersApi;