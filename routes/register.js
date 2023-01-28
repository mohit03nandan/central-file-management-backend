const express = require('express')
const mongoose = require("mongoose");
const {Router} = require("express");
const schema = require("../models/schema");
const { passwords } = require('../models/schema');
const route = Router()

var user = schema.passwords

route.post("/", async(req,res,next)=>{
    const pinValue = req.body.password
    console.log(pinValue)

    // const userCollection = new user({
    //     password:pinValue
    // })

   const updateDocument = async (_id) =>{
    try{
        const result =  await user.updateOne({_id},{$set:{password:pinValue}});
       console.log("result",result)

    }catch(err){
         console.log(err);
    }
     
       }

    updateDocument('63d27180f5566a0b7b148379')

    
   
})




module.exports = route;