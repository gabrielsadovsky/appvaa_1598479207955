import ClassesApiGenerated from "./generated/ClassesApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ClassesApi extends ClassesApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Classes List
  static getClassesList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/classess")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ClassesApi;