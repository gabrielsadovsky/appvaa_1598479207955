import TeachersModelGenerated from "./generated/TeachersModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = TeachersModelGenerated.init();
  
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
      return await TeachersModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TeachersModelGenerated,
  ...customModel
};
