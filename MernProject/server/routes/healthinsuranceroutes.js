
const insurances=require('../model/healthinsurance');
const express=require('express')


const router=express.Router();
// create Insurance
router.post("/createhealthinsurance", async (req, res) => {
  var { insurance_name,coverage_type,description,coverage_limit,premium_rate} = req.body;
  try {
    const InsuranceAdded = await insurances.create({
        insurance_name: insurance_name,
        coverage_type: coverage_type,
        description: description,
        coverage_limit:coverage_limit,
        premium_rate:premium_rate
    });
    res.status(201).json(InsuranceAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// get
router.get("/healthinsurance", async (req, res) => {
  try {
    const showAll = await insurances.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});



router.get('/gethealthinsurance/:id',(req,res)=>{
  const id=req.params.id;
  insurances.findById({_id:id})
  .then(tasks => res.json(tasks))
  .catch(err => res.json(err))
})

router.put("/updatehealthinsurance/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // const { name, email, age } = req.body;
    const deletedUser = await insurances.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});



//delete
router.delete("/deletehealthinsurance/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleInsurance = await insurances.findByIdAndDelete({ _id: id });
    res.status(200).json(singleInsurance);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});



module.exports = router;
