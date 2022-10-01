import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUserCodeAsync } from "../redux/features/userCode/UserCodeSlice";
import { useDispatch } from "react-redux";
// import { login } from "../services/gooleAuth";

export default function Code() {
    const dispatch = useDispatch();

    const history = useNavigate();
  // const { login,errors,currentUser } = useAuth()
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    code: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
    dispatch(fetchUserCodeAsync(data));

    //   await Swal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title: "Access Granted",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });

      await history("/entries-page");
    } catch (error) {
    }

    setLoading(false);
  };
  return (
    <>
    <div className="login">
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <Link
                    to="/login"
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
                        alt="company logo"
                        width={100}
                      />
                      <h5 className="card-title text-center pb-0 fs-4">
                        Code
                      </h5>
                      <p className="text-center small">
                        Enter your given Organization Code
                      </p>
                    </div>
                    <form className="row g-3 needs-validation"  onSubmit={handleSubmit}>
                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">
                          Code
                        </label>
                        <input
                          type="text"
                          name="code"
                          value={data.code}
                          onChange={handleChange}
                          className="form-control"
                          id="yourEmail"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a Code!
                        </div>
                      </div>

                      <div className="col-12">
                      <button className="btn btn-dark px-4 w-100 rounded-1" type="submit">
                        {loading ? 'Accessing...': 'Access'}
                      </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* End #main */}
  </>
  )
}
