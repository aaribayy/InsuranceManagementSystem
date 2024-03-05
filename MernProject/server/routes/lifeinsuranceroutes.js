
const insurances=require('../model/lifeinsurance');
const express=require('express')


const router=express.Router();
// create Insurance
router.post("/createlifeinsurance", async (req, res) => {
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
router.get("/lifeInsurance", async (req, res) => {
  try {
    const showAll = await insurances.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});



router.get('/getlifeinsurance/:id',(req,res)=>{
  const id=req.params.id;
  insurances.findById({_id:id})
  .then(tasks => res.json(tasks))
  .catch(err => res.json(err))
})

router.put("/updatelifeinsurance/:id", async (req, res) => {
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
router.delete("/deletelifeinsurance/:id", async (req, res) => {
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


