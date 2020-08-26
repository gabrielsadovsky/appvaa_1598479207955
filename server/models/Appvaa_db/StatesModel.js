import StatesModelGenerated from "./generated/StatesModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = StatesModelGenerated.init();
  
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
      return await StatesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...StatesModelGenerated,
  ...customModel
};
