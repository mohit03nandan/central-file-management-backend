const express = require('express')
const mongoose = require("mongoose");
const {Router} = require("express");
const schema = require("../models/schema");
const route = Router()

var folders = schema.foldersData;


route.post("/", async(req,res,next)=>{

    const folder = req.body.folder
    console.log("folder",folder)

    const FolderCollection = new folders({
        folderName:folder
        })
        FolderCollection.save()

       res.send("hello")
})


route.post("/get-folder" , async(req,res,next)=>{
    try{
      const result =  await folders.find().select('folderName');
      console.log(result);
      res.send(result)
    }catch(error){
      next();
    }
  })

module.exports = route;