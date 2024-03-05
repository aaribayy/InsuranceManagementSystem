import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'

function First() {

  const navigate=useNavigate();

  const logout = () => {
    localStorage.setItem("user", false);
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
            <h1  style={{ textAlign: "center" ,color:" #d8363a" , fontWeight:'bolder' }}> WELCOME TO OUR INSURANCE </h1>
            <h4  style={{ textAlign: "center" ,color:" #d8363a" , fontWeight:'bolder' }}> CHOOSE: </h4>
                <div className='d-flex vh-50  justify-content-center align-items-center' >
                    <h3 style={{ textAlign: "center" }}> Health Insurance</h3>
                    <Link to="/viewHealthInsurance" className="btn btn-danger" style={{margin:'1rem',marginLeft:'4rem', width: '100px', height: "50px" }} > Apply </Link>
                </div>
                <div className='d-flex vh-50  justify-content-center align-items-center' >
                    <h3 style={{ textAlign: "center" }}> Life Insurance</h3>
                    <Link to="/viewLifeInsurance" className="btn btn-danger"  style={{margin:'1rem',marginLeft:'4rem', width: '100px', height: "50px" }}> Apply </Link>
                </div>
                <div className='d-flex vh-50  justify-content-center align-items-center' >
                    <h3 style={{ textAlign: "center" }}> Automobile Insurance</h3>
                    <Link to="/viewAutoInsurance" className="btn btn-danger" style={{margin:'1rem',marginLeft:'4rem', width: '100px', height: "50px" }}> Apply </Link>
                </div>
              
                <div className='d-flex vh-50 text justify-content-center align-items-center' >
                    <button  onClick={logout}
                    className="btn btn-primary btn-block gradient-custom-2 mb-2 justify-content-center align-items-center text-center" style={{margin:'1rem', width: '100px', height: "50px" }}> LOGOUT </button>
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

