
import express from "express";
const subjectsRouter = express.Router();

import {
    getAllSubjects,
    getSubjectByName,
    // createSubject,
    // updateSubjectByID,
  } from "../models/models.js"
  
  
  subjectsRouter.get("/subject", async(req, res)=>{
    const searchedSubject = await getSubjectByName(req.query.search)
    res.status(200).json({success:true,payload:searchedSubject})

  });
  
  //   subjectsRouter.get("/subject", async function (req, res){
  //     res.send(await getAllSubjects() )
  //    });

// subjectsRouter.post("/", async function (req, res) {
//     let subject = req.body.subject ;
//     let description = req.body.description;
//     let tech_links = req.body.tech_links;
//     let comments = req.body.comments;
//     res.json(await createSubject(subject, description, tech_links, comments)); 
// });

// subjectsRouter.patch("/:id", async function (req, res) {
//     // get the id of the req
//     const id = req.params.id;
//     let subject = req.body.subject ;
//     let description = req.body.description;
//     let tech_links = req.body.tech_links;
//     let comments = req.body.comments;
//     res.json(await updateSubjectByID(id, subject, description, tech_links, comments));
// });

   

export default subjectsRouter;