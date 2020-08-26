import actionsFunction from "./generated/StudentsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import StudentsApi from "../../api/StudentsApi";
 
 actionsFunction.loadStudentsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return StudentsApi
     .getStudentsList()
     .then(list => {
       dispatch(actionsFunction.loadStudentsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
