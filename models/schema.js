
const mongoose = require("mongoose")


  const password = new mongoose.Schema({ 
      
            password: {
                type: String,
                required: true,
            }
    });

 
    
    const passwords = mongoose.model('passwords', password);
   
    
    var my_schemas = {
       "passwords": passwords
    };

module.exports = my_schemas;