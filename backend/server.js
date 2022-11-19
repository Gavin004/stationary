/*
const express = require("express");
const cors = require("cors");   
const mongoose =require("mongoose");
const bodyParser=require("body-parser");


const router = express.Router();
let FormSchema =require("./ADD");

const app = express();
const port = 3001; 

// Middleware
app.use(express.json());
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const connection_url="mongodb+srv://newuser:newuser@crud.ym1yaq4.mongodb.net/smsdata?retryWrites=true&w=majority"

mongoose.connect(connection_url,{
  useNewUrlParser: true,
  useUnifiedTopology: true

},(err)=>
{
  if(err)
  {console.log("error in connection")}
  else
  {console.log("connected to db")}
});
 

router.route('/add').post((req,res) =>
{
    FormSchema.create(req.body,(error,data) =>
    {
   
        console.log(data)
        res.json(data)
    
    })
});

app.get("/read", async (req,res)=>{
  FormSchema.find({},(err,result)=>{
    if(err){
      res.send(err );
    }

    res.send(result);
  }); 

});

app.delete("/delete/:id", async(req,res)=>{
  const id = req.params.id;

  await FormSchema.findByIdAndRemove(id).exec();
  res.send('delete');
});


app.listen(3001,() => {
  console.log("Server started")
});



*/

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors=require("cors");
// require("dotenv").config({ path: "./config.env" });


const FormSchema = require("./ADD");
app.use(cors());
app.use(express.json());
// const port = process.env.PORT || 3001;

/*useEffect( ()=>{
  Axios.post("")

},[])  */

mongoose.connect("mongodb+srv://newuser:newuser@crud.ym1yaq4.mongodb.net/smsdata?retryWrites=true&w=majority",{
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));




app.post("/add", async (req,res)=>{
    console.log("hai")
    
    const productname1 = req.body.productname;
    const category1= req.body.category;
    const quantity1= req.body.quantity;
    const price1= req.body.price;

    const med= new FormSchema({productname: productname1, category: category1,quantity:quantity1,price:price1});

    try{
        await med.save();
        res.send("inserted data");
        console.log("inserted")
    } catch(err){
        console.log(err)
    }

});

app.get("/read", async (req,res)=>{
  FormSchema.find({},(err,result)=>{
    if(err){
      res.send(err );
    }

    res.send(result);
  }); 

});

app.delete("/delete/:id", async(req,res)=>{
  const id = req.params.id;

  await FormSchema.findByIdAndRemove(id).exec();
  res.send('delete');
});


app.listen(3001,() => {
  console.log("Server started")
});


