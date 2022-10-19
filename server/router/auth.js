const express = require("express");
const router = express.Router();
const User = require("../modals/userSchema");
/**
 * Creating Routes to all pages
 */

router.get('/', (req, res) => {
    res.send("Home Page")
});

// router.get('/about', middlewares, (req, res) => {
//     res.send("About Page")
// });

router.get('/contact', (req, res) => {
    res.send("contact Page")
});

router.get('/signup', (req, res) => {
    res.send("signup Page")
});

router.get('/signin', (req, res) => {
    res.send("signin Page")
});

// router.post('/register', (req, res) => { 

//     const { name, email, phoneNumber, work, password, cpassword } = req.body
//     if (!name || !email || !phoneNumber || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Plz fill all fields properly" })
//     }
//     User.findOne({ email: email }).then((UserExist) => {
//         if (UserExist) {
//             return res.status(422).json({ error: "Email Already Exist" })
//         }
//         const user = new User({ name, email, phoneNumber, work, password, cpassword })
//         user.save().then(() => {
//             res.status(201).json({ message: "User Registered Sucessfully" })
//         }).catch((err) => res.status(500).json({ error: "Failed To Register" }));
//     }).catch(error => { console.log(error) })

// });


router.post('/register', async (req, res) => {

    const { name, email, phoneNumber, work, password, cpassword } = req.body
   
    if (!name || !email || !phoneNumber || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Plz fill all fields properly" })
    }

    try {
        const UserExist = await User.findOne({ email: email });
        if (UserExist) {
            return res.status(422).json({ error: "Email Already Exist" })
        }
      
        const user = new User({ name, email, phoneNumber, work, password, cpassword })
     
        await user.save();
      
        res.status(201).json({ message: "User Registered Sucessfully" })
  
    } catch (err) {
        console.log(err)
    }
});


module.exports = router;