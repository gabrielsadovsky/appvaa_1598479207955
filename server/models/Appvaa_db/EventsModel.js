import EventsModelGenerated from "./generated/EventsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = EventsModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await EventsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...EventsModelGenerated,
  ...customModel
};
