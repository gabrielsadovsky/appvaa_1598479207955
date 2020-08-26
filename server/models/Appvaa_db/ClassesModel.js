import ClassesModelGenerated from "./generated/ClassesModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ClassesModelGenerated.init();
  
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
      return await ClassesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ClassesModelGenerated,
  ...customModel
};
