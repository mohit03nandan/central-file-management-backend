const express = require('express')
const mongoose = require("mongoose");
const {Router} = require("express");
const schema = require("../models/schema");
const route = Router()

var user = schema.passwords


route.post("/", async(req,res,next)=>{
    const pinValue = req.body.password
    console.log(pinValue)

    const result = await user.findOne({_id:'63d27180f5566a0b7b148379'})
    if(result.password === pinValue){
        res.send({message:"true", user : result})
        console.log("matched")
    }else{
        console.log("not matched")
        res.send({message:"false"})
    }
})

module.exports = route;