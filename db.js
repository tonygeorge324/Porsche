const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Porsche', (err) =>{
    if(!err)
    console.log('MongoDB Connection Succeede...');
    else
    console.log('Error in DB Connection: ' + JSON.stringify(err,undefined,2));
});
module.exports = mongoose;