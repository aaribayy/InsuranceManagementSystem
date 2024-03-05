import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateAuto() {
    
    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [age, setAge] = useState()
    const [cnic, setcnic] = useState()
    const [address, setaddress] = useState()
    const [phoneNo, setphoneNo] = useState()
    const [vehicleMake, setvehicleMake] = useState()
    const [vehicleModel, setvehicleModel] = useState()
    const [vehicleYear, setvehicleYear] = useState()
    const [insurance_status, setinsurance_status] = useState()
    const [document_cnic,setdocument_cnic]=useState()
    const {id} = useParams()
    const [insurance_name, setName]=useState()
    const [coverage_type, setType]=useState()
    const[description,setDescription]=useState()
    const [coverage_limit, setLimit]=useState()
    const[premium_rate,setRate]=useState()
    const[pherror, setpherror]= useState()
    const[cnerror, setcnerror]= useState()

    const navigate = useNavigate()
    
    useEffect(()=>{{
        axios.get('http://localhost:3000/autoinsurance/getautoinsurance/'+id)
        .then(result => {console.log(result)
          setName(result.data.insurance_name)
          setType(result.data.coverage_type)
          setDescription(result.data.description)
          setLimit(result.data.coverage_limit)
          setRate(result.data.premium_rate)
          setinsurance_status("Pending")
        })
        .catch(err => console.log(err))
      }},[])


    const Submit = (e) => {
        e.preventDefault();
        if (phoneNo.length > 11 || phoneNo.length < 11 ){
        setpherror("Enter valid 11 digit number")
        setcnerror("")
        return
        }else if(cnic.length > 13 || cnic.length < 13 ){
            setpherror('')
        setcnerror("Enter valid 13 digit CNIC")
        return
        }else{
        axios.post("http://localhost:3000/userautoinsurance/CreateUserautoinsurance",
        {firstname,lastname,age,cnic,address,phoneNo,vehicleMake,vehicleModel,vehicleYear,insurance_name,coverage_type,description,coverage_limit,premium_rate,insurance_status,document_cnic})
        .then(result => {
            setcnerror('')
            setpherror('')
            console.log(result)
            alert(`Form Submitted. \nYou have applied for ${insurance_name}`)
            navigate('/viewAutoInsurance')
        })
        .catch(err => console.log(err))
    }}
  return (
    <div className='d-flex text-bg-dark p-3 justify-content-center align-items-center' style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
        <div className='w-50 bg-primary bg-opacity-25 rounded p-3'>
            <form onSubmit={Submit}>
                <h2 style={{textAlign:"center"}}>Apply For Auto Mobile Insurance</h2>
                
                <div className='mb-2'>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Enter First Name' className='form-control' required
                    onChange={(e) => setfirstname(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Enter Last Name' className='form-control'required
                    onChange={(e) => setlastname(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type='Number' placeholder='Enter Age' className='form-control' required
                    onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">CNIC</label>
                    <input type="Number" placeholder='Enter CNIC' className='form-control'required
                    onChange={(e) => setcnic(e.target.value)}/>
                    <div style={{ color: 'red' }}>{cnerror}</div>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder='Enter Address' className='form-control'required
                    onChange={(e) => setaddress(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Phone No</label>
                    <input type="Number" placeholder='Enter Phone No' className='form-control'required
                    onChange={(e) => setphoneNo(e.target.value)}/>
                    <div style={{ color: 'red' }}>{pherror}</div>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Vehicle Make</label>
                    <input type="text" placeholder='Enter Vehicle Make' className='form-control'required
                    onChange={(e) => setvehicleMake(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Vehicle Model</label>
                    <input type="text" placeholder='Enter Vehicle Model' className='form-control'required
                    onChange={(e) => setvehicleModel(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Vehicle Year</label>
                    <input type="Number" placeholder='Enter Vehicle Year' className='form-control'required
                    onChange={(e) => setvehicleYear(e.target.value)}/>
                </div>

                {/* <div className='mb-2'>
                    <label htmlFor="">Insurance Status</label>
                    <input type="text" placeholder='Enter Insurance status' className='form-control' required
                     onChange={(e) => setinsurance_status(e.target.value)}/>
                </div> */}
                <div className='mb-2'>
                    <label htmlFor="">Upload Document</label>
                    <input type="file" placeholder='Upload doc' className='form-control'required
                    onChange={(e) => setdocument_cnic(e.target.value)}/>
                </div>

                {/* <div className='mb-2'>
          <label htmlFor="" > Insurance Name </label>
          <input type="text" className='form-control' placeholder='Enter Insurance Name' disabled
          value={insurance_name} onChange={(e)=> setName(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" >Coverage Type </label>
          <input type="text" className='form-control' placeholder=' Enter Coverage Type' disabled
          value={coverage_type} onChange={(e)=> setType(e.target.value)}/>
          
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" >Description </label>
          <input type="text" className='form-control' placeholder='Enter Description'  disabled
          value={description} onChange={(e)=> setDescription(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" > Coverage Limit </label>
          <input type="text"  className='form-control' placeholder='Enter Coverage Limit' disabled
          value={coverage_limit} onChange={(e)=> setLimit(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" >Premium Rate </label>
          <input type="text"  className='form-control' placeholder='Enter Preminum rate' disabled
          value={premium_rate} onChange={(e)=> setRate(e.target.value)}/>
          </div> */}
          <div style={{padding:"2rem" , marginLeft:"17rem"}}>
            
          <button className="btn btn-danger justify-content-center align-items-center text-center">Submit</button>
          </div>
            </form>
           
        </div>
    </div>
  )
}

export default CreateAuto;