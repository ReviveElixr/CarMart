const express = require('express');
const router = express.Router();
const User = require('../model/userSchima');
const Msg = require('../model/msg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



router.post('/register', async (req, res) => {

    const { name, email, password, cpassword } = req.body;
    if (!name, !email, !password, !cpassword) {
        return res.status(422).json({ error: " all field mandatory" });
    }
    try {
        const duplicate = await User.findOne({ email });
        console.log(duplicate);
        if (duplicate) {
            return res.status(422).json({ error: "Email alredy present" });
        }
        const user = new User({
            name, email, password, cpassword
        });

        const userRegister = await user.save();

        if (userRegister) {
            res.status(201).json({ message: "user register successfully" });

        }

    } catch (err) {
        console.log(err);
    }
});

router.post('/signin', async (req, res) => {
    try {
        // res.cookie("dil", "din");
        const { email, password } = req.body;
        if (!email, !password) {
            return res.status(400).json({ error: "plz fill data" });
        }

        const userLogin = await User.findOne({ email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            // console.log(token);
            // res.cookie("hello", "this is cookie");
            // console.log("successfully")
            // res.cookie("xenonToken", token,{
            //     expires:new Date(Date.now()+25892000000),
            //     httpOnly:true
            // })
            if (!isMatch) {
                res.status(400).json({ error: "user credentials not match" });
            } else {
                res.status(200).json({ message: "user signin successfully" });
            }
        } else {
            res.status(400).json({ error: "user credentials not match" });
        }
    } catch (err) {
        console.log({error: err});
    }
})

router.post('/getInTouch',async (req,res)=>{
    try{
        const {name, phone, email, msg} = req.body;
        if(!name, !phone, !email, !msg){
            return res.status(400).json({error:"for get in touch mandatory all fields.."});
        }
        const newMsg = new Msg({
            name, phone, email, msg
        })
        const msgAcc = await newMsg.save();

        if(msgAcc){
            res.status(200).json({message: "Now soon we reched out you !"});
        }else{
            res.status(400).json({ error: "unothrize request" });
        }


    }catch(err){
        console.log({error: err});
    }
})

module.exports = router;