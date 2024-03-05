
const insurances= require('../model/userautoinsurance');
const express=require('express')


const router=express.Router();
router.post("/CreateUserautoinsurance",(req,res) =>{
    insurances.create(req.body).then(autoInsurance => res.json(autoInsurance))
    .catch(err => res.json(err));
})

router.get("/GetUserautoinsurance", async (req, res) => {
    try {
      const showAll = await insurances.find();
      res.status(200).json(showAll);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });

module.exports = router;
