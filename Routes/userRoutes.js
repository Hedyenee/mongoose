const express = require('express')
const router = express.Router()
const User = require('../models/PersonsSchema')





   router.post("/addNewPerson" , (req,res)=>{
    
    

    let newPerson=new User(req.body)
    newPerson.save( (err,data)=>{
    err? console.log(err) : res.send('person was added')
    })

   })
   //Create Many Records with model.create()
router.post("/manyPerson", (req, res) => {
   User.create(
     { name: "hedyen", age: 26, favoriteFoods: ["lablabi", "spaghetti"] },
     { name: "sarra", age: 33, favoriteFoods: ["coffee", "jus"] },
     { name: "mehdi", age: 25, favoriteFoods: ["couskous"] },
     { name: "khaled", age: 14, favoriteFoods: ["hamberger"] },
     (err, contact) => {
       if (err) throw err;
       else res.send({ msg: "Persons added" });
     }
   );
 });
 //model.find() to Search Your Database
 router.get("/getPerson",(req,res)=>{
   User.find()
   .then((data) => res.json(data))
   .catch((err) => console.log(err))
     
 })
 //Use model.findOne() to Return a Single Matching Document from Your Database
 router.get("/getOne",(req,res)=>{
   User.findOne({"favoriteFoods":["jus", "hamberger"]})
   .then((data) => res.json(data))
   .catch((err) => console.log(err))
 })
 //Use model.findById() to Search Your Database By _id
 router.get("/getbyid/:id",(req,res)=>{
   User.find({_id:req.params.id})
   .then((data) => res.json(data))
   .catch((err) => console.log(err))

 })
 //Perform Classic Updates by Running Find, Edit, then Save
 router.put("/update/:id",(req,res)=>{
   User.findByIdAndUpdate({_id:req.params.id},{...req.body},)
   .then((data) => res.json(data))
   .catch((err) => console.log(err))
 })
 //Perform New Updates on a Document Using model.findOneAndUpdate()
 router.put("/findNameAndSetAge/:name", (req, res) => {
   User.findOneAndUpdate(
     { name: req.params.name },
     { ...req.body },
     (err, data) => {
       if (err) throw err;
       else {
         res.json(req.body);
       }
     }
   );
 });
 //Delete One Document Using model.findByIdAndRemove
 router.delete("/deleteOne/:id",(req, res)=>{
   User.findOneAndRemove({_id:req.params.id},{...req.body},)
   .then((data) => res.json(data))
   .catch((err) => console.log(err))
 })

router.delete("/findAndDeleteMany", (req, res) => {
 User.remove({ name: "mehdi" }, (err, data) => {
   if (err) throw err;
   else {
     res.json({ msg: "deleted document", data });
   }
 });
});



 router.get('/allUser' , (req,res)=>{
   User.find({ favoriteFoods : "coffee"}).select("name").limit(2)

   .then((data)=> res.status(200).json(data))
   .catch((err)=> res.json(err))
 })












module.exports = router