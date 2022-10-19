const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection Successful !")
}).then((error) => {
    console.log(error)
})


// admin
// Admin@123  
// mernstack.users 
// mongodb+srv://admin:admin123@cluster0.azthuof.mongodb.net/?retryWrites=true&w=majority