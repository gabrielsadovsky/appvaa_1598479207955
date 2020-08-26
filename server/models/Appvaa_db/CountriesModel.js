import CountriesModelGenerated from "./generated/CountriesModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CountriesModelGenerated.init();
  
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
      return await CountriesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CountriesModelGenerated,
  ...customModel
};
