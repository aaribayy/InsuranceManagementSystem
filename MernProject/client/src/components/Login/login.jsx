import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const submit = async (e) => {
    e.preventDefault();

    // Check if email or password is empty
    if (!email.trim()) {
      alert("Username cannot be empty.");
      return;
    }
    else if( !password.trim()){
      alert("password cannot be empty.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      if (response.data === "exist") {
        localStorage.setItem("user", true);
        history("/applyforinsurance");
      } else if (response.data === "notexist") {
        alert("User has not signed up!");
      }
    } catch (error) {
      alert("Wrong details!");
      console.log(error);
    }
  
  };

  return (
    <>
      <section
        className="h-100 gradient-form"
        style={{ background: "#ff704d" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            {" "}
            {/* Added d-flex, justify-content-center, and align-items-center */}
            <div className="col-xl-10">
              <div className="card rounded-4 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">
                          We are The Insurance Team
                        </h4>
                      </div>
                      <form>
                        <p>Please login to your account</p>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example11"
                          >
                            Username
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            id="password"
                            className="form-control"
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example22"
                          >
                            Password
                          </label>
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="button"
                            style={{ width: "400px", height: "50px" }}
                            onClick={submit}
                          >
                            Log in
                          </button>
                          <a
                            className="text-muted"
                            href="#!"
                            style={{ display: "block" }}
                          >
                            Forgot password?
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <Link
                            to="/signup"
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Signup Page
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        At our Insurance, we understand that life is filled with
                        uncertainties. That's why we are dedicated to providing
                        you with comprehensive coverage tailored to your unique
                        needs. Our commitment goes beyond just policies; it's
                        about building trust and ensuring peace of mind for you
                        and your loved ones. With our expert team by your side,
                        navigating the complexities of insurance becomes
                        seamless and straightforward. Whether you're looking to
                        protect your home, car, health, or future, we've got you
                        covered. Experience the Insurance difference—where
                        integrity, reliability, and personalized service come
                        together to safeguard what matters most to you.
                      </p>
                    </div>
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

export default login;
