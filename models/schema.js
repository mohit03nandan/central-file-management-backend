
const mongoose = require("mongoose")


  const password = new mongoose.Schema({ 
      
            password: {
                type: String,
                required: true,
            }
    });

 const folders = new mongoose.Schema({
    folderName : {
        type: String,
        required: true,  
    },
    FilesName: { 
        type: Array, 
        // required: true
    }

 })
    
    const passwords = mongoose.model('passwords', password);
   
    
    const foldersData = mongoose.model('foldersData', folders);
   
    
    var my_schemas = {
       "passwords": passwords,
       "foldersData": foldersData
    };

module.exports = my_schemas;