import actionsFunction from "./generated/TeachersActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import TeachersApi from "../../api/TeachersApi";
 
 actionsFunction.loadTeachersList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return TeachersApi
     .getTeachersList()
     .then(list => {
       dispatch(actionsFunction.loadTeachersSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
