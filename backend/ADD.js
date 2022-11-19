const mongoose = require("mongoose");

const FormSchema = mongoose.Schema({
  
        productname:"String", 
        category: "String",
        quantity: "String",
        price: "String",
 
});
const FormData = mongoose.model("FormData",FormSchema)
module.exports = FormData;
