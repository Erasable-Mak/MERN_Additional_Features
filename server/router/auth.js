const { request } = require('express');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchama');

router.get('/', (re, res) => {
    res.send('Hello server router');
});

//using promises

/*router.post('/register', (req, res) => {

    const {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({ error: "Please fill all details"});
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist){
                return res.status(422).json({ error: "Email already exist"});
            }

            const user = new User({ name, email, phone, work, password, cpassword });

            user.save().then(() => {
                res.status(201).json({ message: "user registered sucessfully" });
           }).catch((err) => res.status(500).json({ error: "Failed to register" }));
       
        }).catch( err => { console.log(err); }); */

// Async-Await  (register route)     

router.post('/register', async (req, res) => {

    const {name, email, phone, work, password, cpassword} = req.body;
        
        if(!name || !email || !phone || !work || !password || !cpassword){
                return res.status(422).json({ error: "Please fill all details"});
        }
        
        try {
            const userExist = await User.findOne({ email: email })

            if (userExist){
                return res.status(422).json({ error: "Email already exist"});
            }else if(password != cpassword){
                return res.status(422).json({ error: "password no match"});
            }else{
                const user = new User({ name, email, phone, work, password, cpassword });

                await user.save();
                res.status(201).json({ message: "user registered sucessfully" });
            }

           

        } catch(err) {
            console.log(err);
        }

                
 
    /* console.log(req.body.name);
    console.log(name);
    res.json({ message: req.body });
    res.send("My register page"); */ 
});

// login route
router.post('/login', async (req, res) => {
    //console.log(req.body);
    //res.json({ message: "Signin done"});
    try{
        let token;
        const { email, password} = req.body;
        if (!email || !password){
            return res.status(400).json({error:"Please fill the data"})
        }

        const userLogin = await User.findOne({ email: email});

        //console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
        
            token = await userLogin.generateAuthToken();
            
            console.log(token);
 // creating cookie
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

        if(!isMatch){
            res.status(400).json({ error :"Invalid Credentals"});
        }else{
            res.json({ message:"signin successfull"});   
        }
        }else{
            res.status(400).json({ error :"Invalid Credentials"});
        }

        
        

    }catch(err){
        console.log(err);
    }
});

module.exports = router;