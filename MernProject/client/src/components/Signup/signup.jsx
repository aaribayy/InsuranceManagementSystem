import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function signup() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("user aready exists!");
          } else if (res.data == "notexist") {
            localStorage.setItem("authenticated", true);
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      {/* <div className='login'>

     <h1>Sign UP</h1>

     <form action="POST">
       <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email' id='' name=''/>
       <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' id='' name=''/>
    
     <button type='submit' onClick={submit}>Submit</button>
     </form>

     <br />
     <p>OR</p>
     <br />

     <Link to="/login">Login Page</Link>
   </div> */}

      <section
        className="h-100 gradient-form"
        style={{
          background:
            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
        }}
      >
        <div className="container py-4 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-6">
              {" "}
              {/* Changed col-xl-50 to col-xl-6 */}
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="card-body p-md-4 mx-md-3">
                    {" "}
                    {/* Reduced padding */}
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "150px" }}
                        alt="logo"
                      />{" "}
                      {/* Reduced logo size */}
                      <h4 className="mt-2 mb-4 pb-1">
                        We are The Insurance Team
                      </h4>{" "}
                      {/* Adjusted margin */}
                    </div>
                    <form>
                      <p className="text-center">
                        Please login to your account
                      </p>
                      <div className="form-outline mb-3">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Email address"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <label className="form-label" htmlFor="form2Example11">
                          Username
                        </label>
                      </div>
                      <div className="form-outline mb-3">
                        <input
                          type="password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          id="form2Example22"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form2Example22">
                          Password
                        </label>
                      </div>
                      <div className="text-center pt-2 mb-4">
                        <button
                          className="btn btn-primary btn-block gradient-custom-2 mb-2"
                          type="button"
                          style={{ width: "300px", height: "40px" }}
                          onClick={submit}
                        >
                          Log in
                        </button>{" "}
                        {/* Adjusted button size */}
                        <a
                          className="text-muted"
                          href="#!"
                          style={{ display: "block", fontSize: "0.9rem" }}
                        >
                          Forgot password?
                        </a>{" "}
                        {/* Adjusted font size */}
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-3">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <Link
                          to="/login"
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                        >
                          Login Page
                        </Link>{" "}
                        {/* Adjusted button size */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default signup;
