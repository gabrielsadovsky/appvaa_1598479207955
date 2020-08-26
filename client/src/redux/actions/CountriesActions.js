import actionsFunction from "./generated/CountriesActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import CountriesApi from "../../api/CountriesApi";
 
 actionsFunction.loadCountriesList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return CountriesApi
     .getCountriesList()
     .then(list => {
       dispatch(actionsFunction.loadCountriesSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
