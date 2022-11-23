
import express from "express";
const subjectsRouter = express.Router();
// Write your router code here!
// import functions from models/models.js
// create route handler get subject by name

import {
    getAllSubjects,
    getSubjectByName,
    // createSubject,
    // updateSubjectByID,
  } from "../models/models.js"
  
//   subjectsRouter.get("/subject", async function (req, res){
//     console.log("anything")
//     res.send(await getAllSubjects() )
//    });

subjectsRouter.get("/subject", async function (req, res){
    console.log("anything")
    let searchTerm = req.query.search
    console.log(searchTerm)
    res.send(await getSubjectByName(searchTerm))
   });

// create route handler for recipesRouter.post(req, res)
subjectsRouter.post("/", async function (req, res) {
    let subject = req.body.subject ;
    let description = req.body.description;
    let tech_links = req.body.tech_links;
    let comments = req.body.comments;
    res.json(await createSubject(subject, description, tech_links, comments)); 
});

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