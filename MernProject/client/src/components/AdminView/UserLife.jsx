
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

function UserLife() {
  const [insurances, setInsurance] = useState([]);

  useEffect(() => {
    // Fetch insurances from the correct endpoint
    axios.get('http://localhost:3000/userlifeinsurance/GetUserlifeinsurance')
      .then(result => setInsurance(result.data))
      .catch(err => console.log(err));
  }, []);

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:3000/healthinsurance/deletehealthinsurance/${id}`)
//       .then(res => {
//         console.log(res);
//         window.location.reload();
//       })
//       .catch(err => console.log(err));
//   };

  return (
    <>
      <div className="d-flex vh-100 bg-dark justify-content-center align-items-center light-transparent-background" style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
        <div className="w-50 bg-white rounded p-3">
                <h2 style={{textAlign:"center"}}>Life Insurance Users</h2>
          {/* <Link to="/createhealthInsurance" className="btn btn-danger">Add Insurance+</Link> */}
          <table className="table">
            <thead>
              <tr>
                <th>Insurance Name</th>
                <th>Frst Name</th>
                <th>Last Name</th>
                <th>CNIC</th>
                <th>Coverage Limit</th>
                <th>Premium Rate</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {insurances.map((insurances) => (
                <tr>
                  <td>{insurances.insurance_name}</td>
                  <td>{insurances.firstname}</td>
                  <td>{insurances.lastname}</td>
                  <td>{insurances.cnic}</td>
                  <td>{insurances.coverage_limit}</td>
                  <td>{insurances.premium_rate}</td>
                  {/* <td>
                    <Link to={`/updatehealthInsurance/${insurances._id}`} className="btn btn-danger">Update Insurance </Link>
                    <button className="btn btn-danger" onClick={() => handleDelete(insurances._id)}>Delete</button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserLife;

