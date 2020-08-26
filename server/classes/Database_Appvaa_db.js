// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import CitiesModel from "../models/Appvaa_db/CitiesModel";
import ClassesModel from "../models/Appvaa_db/ClassesModel";
import ClubsModel from "../models/Appvaa_db/ClubsModel";
import CountriesModel from "../models/Appvaa_db/CountriesModel";
import EventsModel from "../models/Appvaa_db/EventsModel";
import StatesModel from "../models/Appvaa_db/StatesModel";
import StudentsModel from "../models/Appvaa_db/StudentsModel";
import TeachersModel from "../models/Appvaa_db/TeachersModel";
import UserModel from "../models/Appvaa_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.appvaa_db_dbUrl);

    // Start Init Models

		CitiesModel.init();
		ClassesModel.init();
		ClubsModel.init();
		CountriesModel.init();
		EventsModel.init();
		StatesModel.init();
		StudentsModel.init();
		TeachersModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_appvaa_db = await mongoose.connect(
        "mongodb://" + properties.appvaa_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_appvaa_db;
  }
}

export default new Database();
