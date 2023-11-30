const mongoose = require("mongoose")
const phoneSchema = mongoose.Schema({
    Phone_Name:String,
    Phone_price:{
        type: Number,
        min:10000,
        max: 1000000},
    Phone_Storage:{
        type: Number,
        min:128,
        max: 1024}
})
module.exports = mongoose.model("phone",phoneSchema)

//[{Phone_Name: "OnePlus", Phone_price: 200000, Phone_Storage: 256},{Phone_Name: "Iphone 7", Phone_price: 400000, Phone_Storage: 512},{Phone_Name: "Samsung", Phone_price: 1000000, Phone_Storage: 1024}];