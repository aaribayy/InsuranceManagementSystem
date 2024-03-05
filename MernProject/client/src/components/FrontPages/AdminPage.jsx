import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'

function First() {
const navigate=useNavigate();

  const logout = () => {
    localStorage.setItem("admin", false);
    navigate('/role');
  };
    return (
<>
        
<div className="h-100 gradient-form" style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
  <div className="container py-4 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-6"> {/* Changed col-xl-50 to col-xl-6 */}
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="card-body p-md-4 mx-md-3"> {/* Reduced padding */}
              <div className="text-center">
              </div>

            <h1 style={{ textAlign: "center" ,color:" #d8363a" , fontWeight:'bolder' }}> Admin </h1>

                <div className='d-flex vh-50  justify-content-center align-items-center' >
                    <h3 style={{ textAlign: "center" ,color:" #d8363a" }}> Available Health Insurances</h3>
                    <Link to="/ViewAvailableHealth" style={{margin:'1rem',marginLeft:'4rem', width: '100px', height: "50px" }} className="btn btn-primary btn-block gradient-custom-2 mb-2 justify-content-center align-items-center text-center"> view </Link>
                </div>

                <div className='d-flex vh-50 justify-content-center align-items-center' >
                    <h3 style={{ textAlign: "center" ,color:" #d8363a"  }}> Available Life Insurances</h3>
                    <Link to="/ViewAvailableLife" className="btn btn-primary btn-block gradient-custom-2 mb-2 justify-content-center align-items-center text-center" style={{margin:'1rem',marginLeft:'5rem', width: '100px', height: "50px" }}> view </Link> 
                </div>

                <div className='d-flex vh-50 justify-content-center align-items-center' >
                    <h3 style={{ textAlign: "center" ,color:" #d8363a"  }}>Available Automobile Insurances</h3>
                    <Link to="/ViewAvailableAuto" className="btn btn-primary btn-block gradient-custom-2 mb-2 justify-content-center align-items-center text-center" style={{margin:'1rem', width: '100px', height: "50px" }}> view </Link>
                </div>
                
                <div className='d-flex vh-50  justify-content-center align-items-center' >
                    <h3 style={{ textAlign: "center" ,color:" #d8363a"  }}>Users applied for Health Insurances</h3>
                    <Link to="/ViewHealthUsers" className="btn btn-primary btn-block gradient-custom-2 mb-2 justify-content-center align-items-center text-center" style={{margin:'1rem', width: '100px', height: "50px" }}> view </Link>
                </div>
                
                <div className='d-flex vh-50 justify-content-center align-items-center' >
                    <h3 style={{ textAlign: "center"  ,color:" #d8363a" }}>Users applied Life Automobile Insurances</h3>
                    <Link to="/ViewLifeUsers" className="btn btn-primary btn-block gradient-custom-2 mb-2 justify-content-center align-items-center text-center" style={{margin:'1rem', width: '100px', height: "50px" }}> view </Link>
                </div>
                
                <div className='d-flex vh-50 text justify-content-center align-items-center' >
                    <h3 style={{ textAlign: "center" ,color:" #d8363a" }}>Users applied for Automobile Insurances</h3>
                    <Link to="/ViewAutoUsers" className="btn btn-primary btn-block gradient-custom-2 mb-2 justify-content-center align-items-center text-center" style={{margin:'1rem', width: '100px', height: "50px" }}> view </Link>
                </div>
                
                <div className='d-flex vh-50 text justify-content-center align-items-center' >
                    <button  onClick={logout}
                    className="btn btn-primary btn-block gradient-custom-2 mb-2 justify-content-center align-items-center text-center" style={{margin:'1rem', width: '100px', height: "50px" }}>LOGOUT</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
           
        </>
    )
}

export default First;