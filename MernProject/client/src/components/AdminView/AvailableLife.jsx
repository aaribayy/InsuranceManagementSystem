
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

function ViewLife() {
  const [insurances, setInsurance] = useState([]);

  useEffect(() => {
    // Fetch insurances from the correct endpoint
    axios.get('http://localhost:3000/lifeinsurance/lifeInsurance')
      .then(result => setInsurance(result.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="d-flex vh-100 bg-dark justify-content-center align-items-center light-transparent-background" style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
        <div className="w-50 bg-white rounded p-3">
        <h2 style={{textAlign:"center"}}>Available Life Insurances</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Insurance Name</th>
                <th>Coverage Type</th>
                <th>Description</th>
                <th>Coverage Limit</th>
                <th>Premium Rate</th>
              </tr>
            </thead>
            <tbody>
              {insurances.map((insurances) => (
                <tr>
                  <td>{insurances.insurance_name}</td>
                  <td>{insurances.coverage_type}</td>
                  <td>{insurances.description}</td>
                  <td>{insurances.coverage_limit}</td>
                  <td>{insurances.premium_rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ViewLife;

