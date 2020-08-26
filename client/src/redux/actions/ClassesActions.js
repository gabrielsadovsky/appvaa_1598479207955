import actionsFunction from "./generated/ClassesActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ClassesApi from "../../api/ClassesApi";
 
 actionsFunction.loadClassesList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ClassesApi
     .getClassesList()
     .then(list => {
       dispatch(actionsFunction.loadClassesSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
