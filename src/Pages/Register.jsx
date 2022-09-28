import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserDataAsync,
  UserSelector,
} from "../redux/features/user/UserSlice";
import { register, updateUser } from "../services/gooleAuth";
// import ProductTitle  from '../Components/BodyTitle/ProductTitle';

export default function Register() {
  const notify = () =>
    toast.success("Loading..", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const { User, loading } = useSelector(UserSelector);

  const dispatch = useDispatch();

  const history = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(data)
      await updateUser(data.displayName)
      // await dispatch(fetchUserDataAsync(data));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(User?.error);
  // console.log("loading: " + loading);

  useEffect(() => {
    if (User?.error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error, " + User?.error + " ,error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (loading) {
      notify();
    }
    // if (User?.email) {
    //   history("/access");
    // }
  }, [User?.error, User?.email, history, loading]);

  return (
    <>
      <main>
        <div className="container">
          <ToastContainer
            position="top-left"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
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
                        <img
                          src="assets/img/logo.png"
                          alt="Company Logo"
                          width={100}
                        />
                        <h5 className="card-title text-center pb-0 fs-4">
                          Create an Account
                        </h5>
                        <p className="text-center small">
                          Enter your personal details to create account
                        </p>
                      </div>
                      {User?.error && (
                        <h6 className="text-danger fw-bold">
                          Invalid user name or password
                        </h6>
                      )}
                      <form
                        className="row g-3 needs-validation"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div className="col-12">
                          <label htmlFor="yourEmail" className="form-label">
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            className="form-control"
                            id="yourEmail"
                            required
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
                              name="displayName"
                              value={data.displayName}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Please enter your name."
                              required
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
                            value={data.password}
                            onChange={handleChange}
                            className="form-control"
                            id="yourPassword"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            className="btn btn-dark px-4 w-100 rounded-1"
                            type="submit"
                          >
                            {loading ? "Creating..." : "Create Account"}
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
  );
}
