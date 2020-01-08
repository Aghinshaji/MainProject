var mongoose=require("mongoose")
var schema= mongoose.Schema;

var minischema=new mongoose.Schema({
    dress:String,
    brand:String,
    prize:Number
})
var promodel=mongoose.model("promodel", minischema,"project")

module.exports=promodel;