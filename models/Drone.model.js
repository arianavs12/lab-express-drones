// Iteration #1
const {Schema, model}=require("mongoose")
const DroneSchema=new Schema({
    name:String,
    propellers:Number,
    maxSpeed:{
        type:Number,
        max: 18
    }
})

module.exports = model("drones", DroneSchema)