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


  /**
  * ClassesModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * ClassesModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * ClassesModel.findBy_club
  *   @description CRUD ACTION findBy_club
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_club(key) {
    return await generatedModel.model.find({ '_club' : key});
  },
  
  /**
  * ClassesModel.findBy_student
  *   @description CRUD ACTION findBy_student
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_student(key) {
    return await generatedModel.model.find({ '_student' : key});
  },
  
  /**
  * ClassesModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * ClassesModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * ClassesModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
