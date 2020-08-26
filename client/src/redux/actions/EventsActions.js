import actionsFunction from "./generated/EventsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import EventsApi from "../../api/EventsApi";
 
 actionsFunction.loadEventsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return EventsApi
     .getEventsList()
     .then(list => {
       dispatch(actionsFunction.loadEventsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
