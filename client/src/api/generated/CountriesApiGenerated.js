/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN CountriesApiGenerated.js PLEASE EDIT ../CountriesApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class CountriesApiGenerated {

  static contextUrl = properties.endpoint + "/countries";

  // CRUD METHODS

  /**
  * CountriesService.create
  *   @description CRUD ACTION create
  *
  */
  static createCountries(countries) {
    return axios.post(CountriesApiGenerated.contextUrl, countries )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * CountriesService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteCountries(id) {
    return axios.delete(CountriesApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * CountriesService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneCountries(id) {
    return axios.get(CountriesApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * CountriesService.list
  *   @description CRUD ACTION list
  *
  */
  static getCountriesList() {
    return axios.get(CountriesApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * CountriesService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveCountries(countries) {
    return axios.post(CountriesApiGenerated.contextUrl + "/" + countries._id, countries )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default CountriesApiGenerated;
