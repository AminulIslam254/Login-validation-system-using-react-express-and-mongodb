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
app.post('/register', (req, res) => {
    
    console.log("lol");
    console.log(req.body);
    const {username,email,password}=req.body;
    // User.findOne({password:password},(err,user)=>{
    //     console.log("This is ",user);
    // })
    const user1=new User({
      username,
      email,
      password
    });
    user1.save((err)=>{
      if(err){
        res.send(err);
      }
      else{
        res.send("Registered Successfully");
      }
    });
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
