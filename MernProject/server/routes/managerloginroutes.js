
const collection=require('../model/managerlogin');
const express=require('express')


const router=express.Router();
// login
router.post("/managerlogin", async (req, res) => {
  const {email, password} = req.body
  try {
        const check= await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});


module.exports = router;