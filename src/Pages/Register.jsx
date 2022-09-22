import React from 'react'
import { Link } from 'react-router-dom'
// import ProductTitle  from '../Components/BodyTitle/ProductTitle';

export default function Register() {
  return (
    <>
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <Link
                    to="/"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <span className="d-none d-lg-block">Amakka Partner</span>
                 </Link>
                </div>
                {/* End Logo */}
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                    <img src="assets/img/logo.png" alt="Company Logo" width={100} />
                      <h5 className="card-title text-center pb-0 fs-4">
                        Create an Account
                      </h5>
                      <p className="text-center small">
                        Enter your personal details to create account
                      </p>
                    </div>
                    <form className="row g-3 needs-validation" noValidate="">
                      {/* <div className="col-12">
                        <label htmlFor="yourName" className="form-label">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="yourName"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please, enter your name!
                        </div>
                      </div> */}
                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="yourEmail"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please enter a valid Email adddress!
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          Name
                        </label>
                        <div className="input-group has-validation">
                          
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Please enter your name."
                            required=""
                          />
                          <div className="invalid-feedback">
                            Please choose a username.
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>
            
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Create Account
                        </button>
                      </div>
                      {/* <div className="col-12">
                        <p className="small mb-0">
                          Already have an account?{" "}
                          <Link to="/login">Log in</Link>
                        </p>
                      </div> */}
                    </form>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    {/* End #main */}
  </>
  
  )
}
