/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE ClassesModelGenerated.js PLEASE EDIT ../ClassesModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Appvaa_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * Classes
      */
    const classesSchema = new mongoose.Schema({
      days: {
        type: "Number"
      },
      vacancies: {
        type: "Number"
      },
      // RELATIONS
      _club: [{
        type: Schema.ObjectId,
        ref: "Clubs"
      }],
      _student: [{
        type: Schema.ObjectId,
        ref: "Clubs"
      }],
      
      
      // EXTERNAL RELATIONS
      /*
      _class: {
        type: Schema.ObjectId,
        ref: "Teachers"
      },
      _class: [{
        type: Schema.ObjectId,
        ref: "Students"
      }],
      _class: {
        type: Schema.ObjectId,
        ref: "Clubs"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Classes", classesSchema));

    return classesSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS




};

export default generatedModel;