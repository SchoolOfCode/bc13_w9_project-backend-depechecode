const express = require("express");
const subjectsRouter = express.Router();
// Write your router code here!
// import functions from models/models.js
// create route handler get subject by name

subjectsRouter.get("/subject", async function (req, res){
    console.log("anything")
    let subject = req.params.subject
    res.send(await getSubjectByName(subject))
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

   
const {
    getSubjectByName,
    createSubject,
    updateSubjectByID,
  } = require("../models/models.js")

module.exports = subjectsRouter;