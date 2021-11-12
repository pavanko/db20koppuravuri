const mongoose = require("mongoose") 
const utilitySchema = mongoose.Schema({ 
    Name: String, 
    Uses: String, 
    Cost: Number 
}); 
module.exports = mongoose.model("utility", utilitySchema)