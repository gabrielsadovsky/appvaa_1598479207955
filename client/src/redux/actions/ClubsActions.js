import actionsFunction from "./generated/ClubsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ClubsApi from "../../api/ClubsApi";
 
 actionsFunction.loadClubsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ClubsApi
     .getClubsList()
     .then(list => {
       dispatch(actionsFunction.loadClubsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
