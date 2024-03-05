
const insurances= require('../model/userlifeinsurance');
const express=require('express')


const router=express.Router();
router.post("/CreateUserlifeinsurance",(req,res) =>{
    insurances.create(req.body).then(lifeInsurance => res.json(lifeInsurance))
    .catch(err => res.json(err));
})

  router.get("/GetUserlifeinsurance", async (req, res) => {
    try {
      const showAll = await insurances.find();
      res.status(200).json(showAll);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });

module.exports = router;
