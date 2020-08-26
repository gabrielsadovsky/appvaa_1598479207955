import CountriesApiGenerated from "./generated/CountriesApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class CountriesApi extends CountriesApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Countries List
  static getCountriesList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/countriess")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default CountriesApi;