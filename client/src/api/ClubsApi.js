import ClubsApiGenerated from "./generated/ClubsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ClubsApi extends ClubsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Clubs List
  static getClubsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/clubss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ClubsApi;