const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config()
const app=express();
const cors=require('cors');
const healthinsuranceRoutes=require('./routes/healthinsuranceroutes');
const autoinsuranceRoutes=require('./routes/autoinsuranceroutes');
const lifeinsuranceRoutes=require('./routes/lifeinsuranceroutes');
const userhealthinsuranceRoutes = require('./routes/userhealthroutes');
const userautoinsuranceRoutes = require('./routes/userautoroutes');
const userlifeinsuranceRoutes = require('./routes/userliferoutes');
const managerloginroutes=require('./routes/managerloginroutes');
const adminloginroutes=require('./routes/adminloginroutes');
const loginroutes=require('./routes/loginroutes');

app.use(cors());

app.use(express.json());

mongoose
        .connect(process.env.URI)
        .then(()=>{
            console.log('connected to database successfully!');
            app.listen(process.env.PORT,(res,err)=>{
                if(err){
                    console.log(err)
                }
                console.log('server running on PORT: ',process.env.PORT);
            })
        })
        .catch((err)=>{
            console.log(err.message);
        });

app.use('/healthinsurance/',healthinsuranceRoutes)
app.use('/autoinsurance/',autoinsuranceRoutes)
app.use('/lifeinsurance/',lifeinsuranceRoutes)
app.use('/userhealthinsurance/',userhealthinsuranceRoutes)
app.use('/userautoinsurance/',userautoinsuranceRoutes)
app.use('/userlifeinsurance/',userlifeinsuranceRoutes)
app.use(loginroutes)
app.use(adminloginroutes)
app.use(managerloginroutes)
