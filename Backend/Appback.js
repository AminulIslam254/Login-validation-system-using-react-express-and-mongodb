const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


const {connectMongoose,User}= require("./Database/Connectdb.js");
 
connectMongoose();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/",(req,res)=>{
  res.send("This is home page");
})

app.post('/', (req, res) => {
  res.send('Hello World!');
})

app.get("/register",(req,res)=>{
  res.send("This is registe2");
})
app.post('/register', async(req, res) => {
    // const user=await User.findOne({email:req.body.email});
    // if(user) return res.status(400).send("User already exists");

    // const newUser= await User.create(req.body) ;
    // res.status(201).send(newUser);
    console.log("lol");
    console.log(req.body);
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})