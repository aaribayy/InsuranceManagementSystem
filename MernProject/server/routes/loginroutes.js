
const collection=require('../model/login');
const express=require('express')


const router=express.Router();
// login
// router.post("/login", async (req, res) => {
//   const {email, password} = req.body
//   try {
//         const check= await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//         }
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: error.message });
//   }
// });

router.post("/login", async (req, res) => {
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

//signup
router.post("/signup", async (req, res) => {
    const {email, password} = req.body

    const data={
        email:email,
        password:password
    }

    try {
          const check= await collection.findOne({email:email})
  
          if(check){
              res.json("exist")
          }
          else{
              res.json("notexist")
              await collection.insertMany({data})
          }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });


module.exports = router;