import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 


function roles() {
  return (
    <div>
        
        {/* <main className="content_aboutus">
          <br />
            <h2 className='pinky'
            style={{ color: "pink"}}>AS Admin</h2>
                        <Link to="/signup" type='button' className="btn btn-outline-danger">Click </Link>
                        <br /><br />
            <h2 className='pinky' style={{ color: "pink"}}> As Manager</h2>
                        <Link to="/signup" type='button' className="btn btn-outline-danger">Click</Link>
                        <br /><br />
            <h2 className='pinky' style={{ color: "pink"}}>As User</h2>
                        <Link to="/login" type='button' className="btn btn-outline-danger">Click</Link>      
                        <br /><br />      
        </main> */}


        <section className="h-100 gradient-form" style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
  <div className="container py-4 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-6"> {/* Changed col-xl-50 to col-xl-6 */}
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="card-body p-md-4 mx-md-3"> {/* Reduced padding */}
              <div className="text-center">
                <h4 className="mt-2 mb-4 pb-1"  style={{ color:'red', fontWeight:"bolder"}}>Select your ROLE</h4> {/* Adjusted margin */}
              </div>
              <form>
                <p className='text-center'  style={{ color:'red', fontWeight:"bolder"}}>Please login to your account</p>

                <div className="form-outline mb-3">
                    <label className="form-label"   style={{ color:'red', fontWeight:"bolder"}} htmlFor="form2Example11">As Admin</label>
                    </div>
                <div className="form-outline mb-3 justify-content-center align-items-center">
                   <Link to="/loginadmin" type='button' style={{ marginLeft:'4rem ',width: '400px', height: "50px" }} className="btn btn-primary btn-block gradient-custom-2 mb-2 justify-content-center align-items-center text-center">Click </Link>
                </div>


                <div className="form-outline mb-3 ">
                  <label className="form-label"   style={{ color:'red', fontWeight:"bolder"}} htmlFor="form2Example22">As Manager</label>
                </div>
                <div className="form-outline mb-3 justify-content-center align-items-center ">
                   <Link to="/loginmanager" type='button' style={{ marginLeft:'4rem ', width: '400px', height: "50px" }} className="btn btn-primary btn-block gradient-custom-2 mb-2 justify-content-center align-items-center text-center">Click </Link>
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label"   style={{ color:'red', fontWeight:"bolder"}} htmlFor="form2Example22">As User</label>
                  </div>
                <div className="form-outline mb-3 justify-content-center align-items-center">
                   <Link to="/login" type='button' style={{ marginLeft:'4rem ', width: '400px', height: "50px" }} className="btn btn-primary btn-block gradient-custom-2 mb-2 justify-content-center align-items-center text-center">Click </Link>
                </div>


              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default roles
