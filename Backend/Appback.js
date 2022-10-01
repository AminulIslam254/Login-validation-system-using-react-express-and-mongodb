const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


const { connectMongoose, User } = require("./Database/Connectdb.js");

connectMongoose();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is home page");
})

app.post('/', (req, res) => {
  res.send('Hello World!');
})


app.post("/login", (req, res)=> {
  const { email, password} = req.body;
  User.findOne({ email: email}, (err, user) => {
      if(user){
          if(password === user.password ) {
              // res.send({message: "Login Successfull", user: user});
              res.send("OK");
          } else {
              res.send({ message: "Password didn't match"})
          }
      } else {
          res.send({message: "User not registered"})
      }
  })
}) 


app.get("/register", (req, res) => {
  res.send("This is registe2");
})



app.post("/register", (req, res) => {
  const {  email,username, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" })
    } else {
      const user = new User({
        email,
        username,
        password
      })
      user.save(err => {
        if (err) {
          console.log("This is error lol")
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      })
    }
  })

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
