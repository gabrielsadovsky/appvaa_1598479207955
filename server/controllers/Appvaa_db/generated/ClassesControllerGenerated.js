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
 *  TO CUSTOMIZE ClassesControllerGenerated.js PLEASE EDIT ../ClassesController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import ClassesModel from "../../../models/Appvaa_db/ClassesModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import ClassesController from "../ClassesController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/classes`;
    router.post(baseUrl + "", authorize([]), ClassesController.create);
    router.delete(baseUrl + "/:id", authorize([]), ClassesController.delete);
    router.get(baseUrl + "/findBy_club/:key", authorize([]), ClassesController.findBy_club);
    router.get(baseUrl + "/findBy_student/:key", authorize([]), ClassesController.findBy_student);
    router.get(baseUrl + "/:id", authorize([]), ClassesController.get);
    router.get(baseUrl + "", authorize([]), ClassesController.list);
    router.post(baseUrl + "/:id", authorize([]), ClassesController.update);
  },


  // CRUD METHODS


  /**
  * ClassesModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await ClassesModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ClassesModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await ClassesModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ClassesModel.findBy_club
  *   @description CRUD ACTION findBy_club
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_club: async (req, res) => {
    try {
      const result = await ClassesModel.findBy_club(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ClassesModel.findBy_student
  *   @description CRUD ACTION findBy_student
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_student: async (req, res) => {
    try {
      const result = await ClassesModel.findBy_student(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ClassesModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await ClassesModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ClassesModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await ClassesModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * ClassesModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await ClassesModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
