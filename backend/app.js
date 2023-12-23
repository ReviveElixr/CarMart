const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const corsOptions = require('./corsOptions');
const cookieParser = require("cookie-parser");


dotenv.config({path:'./config.env'});
const connDB = process.env.DATABASE;
const port = process.env.PORT;
const User = require('./model/userSchima');


// app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(require('./router/auth'));

mongoose.connect(connDB, {
    // userNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
}).then(() => {
    console.log("connection done");
}).catch((err) => {
    console.log("error : ", err);
})




app.get('/', (req, res) => {
    res.cookie("hello", "this is cookie");
    res.send("this is backend");
})

console.log("hello")
// app.get('/about', (req, res) => {
//     res.send("from baout page");
// })
// app.get('/contact', (req, res) => {
//     res.send("from contact page");
// })
// app.get('/singin', (req, res) => {
//     res.send("from signin page");
// })
// app.get('/singUp', (req, res) => {
//     res.send("from singUp page");
// })
app.listen(port, () => {
    console.log("server run on port ", port);
})