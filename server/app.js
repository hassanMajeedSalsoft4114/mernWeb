const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: './config.env' });
require('./db/conn');
app.use(express.json());
// Linking The Router File
app.use(require("./router/auth"));

const PORT = process.env.PORT;


// const User = require("./modals/userSchema");
/**
 * Creating A Middlewares 
 */

const middlewares = (req, res, next) => {
    console.log("Middle ware");
    next()
}


/**
 * Running Server
 */

app.listen(PORT, () => {
    console.log(`Server is Running On port No ${PORT}`)
})