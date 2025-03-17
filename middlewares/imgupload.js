const multer = require("multer");

const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/');
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+"_"+file.originalname)
    }
})
const uploads=multer({storage:storage}).single('image');
module.exports = uploads;