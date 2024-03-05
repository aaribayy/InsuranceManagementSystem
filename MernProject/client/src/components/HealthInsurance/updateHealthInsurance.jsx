

import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';


function updateHealthInsurance() {
    
    const {id} = useParams()
    const [insurance_name, setName]=useState()
    const [coverage_type, setType]=useState()
    const[description,setDescription]=useState()
    const [coverage_limit, setLimit]=useState()
    const[premium_rate,setRate]=useState()
    const navigate=useNavigate()

    useEffect(()=>{{
        axios.get('http://localhost:3000/healthinsurance/gethealthinsurance/'+id)
        .then(result => {console.log(result)
          setName(result.data.insurance_name)
          setType(result.data.coverage_type)
          setDescription(result.data.description)
          setLimit(result.data.coverage_limit)
          setRate(result.data.premium_rate)
        })
        .catch(err => console.log(err))
      }},[])

      const Update= (e) =>{
        e.preventDefault();
        axios.put("http://localhost:3000/healthinsurance/updatehealthinsurance/"+id,{insurance_name, coverage_type,description,coverage_limit,premium_rate})
        .then(result => {
          console.log(result)
          navigate('/health')
        })
        .catch(err => {console.log(err.message)
        document.write(err.message)
        })
      }
      

  return (
    <>
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center" style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update Insurance</h2>
          <div className='mb-2'>
          <label htmlFor="" > Insurance Name </label>
          <input type="text" className='form-control' placeholder='Enter Insurance Name' required
          value={insurance_name} onChange={(e)=> setName(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" >Coverage Type </label>
          <input type="text" className='form-control' placeholder=' Enter Coverage Type' required
          value={coverage_type} onChange={(e)=> setType(e.target.value)}/>
          
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" >Description </label>
          <input type="text" className='form-control' placeholder='Enter Description' required
          value={description} onChange={(e)=> setDescription(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" > Coverage Limit </label>
          <input type="number"  className='form-control' placeholder='Enter Coverage Limit' required 
          value={coverage_limit} onChange={(e)=> setLimit(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" >Premium Rate </label>
          <input type="number"  className='form-control' placeholder='Enter Age' required 
          value={premium_rate} onChange={(e)=> setRate(e.target.value)}/>
          </div>
          
          <button className='btn btn-danger'>Update</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default updateHealthInsurance

