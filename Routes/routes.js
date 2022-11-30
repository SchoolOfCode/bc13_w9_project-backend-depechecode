
import express from "express";
const subjectsRouter = express.Router();

import {
    getAllSubjects,
    getSubjectByName,
    // createSubject,
    // updateSubjectByID,
  } from "../models/models.js"
  
/**
 * GET route for retrieving a specific subject from the database
 * @const {array} searchedSubject - An array of data returned from the database for the searched subject
 */
  subjectsRouter.get("/subject", async(req, res)=>{
    const searchedSubject = await getSubjectByName(req.query.search)
    res.status(200).json({success:true,payload:searchedSubject})

  });
  
 /**
 * GET route for retrieving all subjects from the database
 */
    subjectsRouter.get("/subject", async function (req, res){
      res.send(await getAllSubjects() )
     });

 /**
 * POST route for adding a new subject to the database with associated description, tech links and comments
 */
subjectsRouter.post("/", async function (req, res) {
    let subject = req.body.subject ;
    let description = req.body.description;
    let tech_links = req.body.tech_links;
    let comments = req.body.comments;
    res.json(await createSubject(subject, description, tech_links, comments)); 
});

 /**
 * PATCH route for updating an existing subject in the database with updated description, tech links and/or comments
 */
subjectsRouter.patch("/:id", async function (req, res) {
    // get the id of the req
    const id = req.params.id;
    let subject = req.body.subject ;
    let description = req.body.description;
    let tech_links = req.body.tech_links;
    let comments = req.body.comments;
    res.json(await updateSubjectByID(id, subject, description, tech_links, comments));
});

export default subjectsRouter;