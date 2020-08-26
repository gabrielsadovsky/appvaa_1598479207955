import CitiesModelGenerated from "./generated/CitiesModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CitiesModelGenerated.init();
  
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
      return await CitiesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CitiesModelGenerated,
  ...customModel
};
