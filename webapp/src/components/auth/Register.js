import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../css/style.css";
import Axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../misc/ErrorNotice";
import Cal from "../../images/cal.png";
import constants from "../../constants/constants";

export default function Register() {
  const [displayName, setDisplayName] = useState();
  const [contactNo, setContactNo] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [role, setRole] = useState();
  const [company, setCompany] = useState();
  const [location, setLocation] = useState();
  const [district, setDistrict] = useState();
  
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { displayName,contactNo,email,password,passwordCheck,role,company,location,district };
      await Axios.post(constants.backend_url + "/users/register", newUser);
      const loginRes = await Axios.post(
        constants.backend_url + "/users/login",
        {
          email,
          password,
        }
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/dashboard");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div>
      <div
        class="  p-3 mb-2  text-white "
      //   style={{ backgroundImage: `url(${bg2})` }}
      >
        <div
          class="container-lg  shadow p-3 mb-5  text-dark  "
          style={{ marginTop: "5%", backgroundColor: "white" }}
        >
          {/* <div class="row row-cols-2"> */}
          <div class="row" style={{ marginTop: "1%" }}>
            <img src={Cal} class="img-thumbnail homeImg" alt="..."></img>
          </div>
          <div class="row">
            <div
              class="container-sm   p-3 mb-5 bg-body rounded bg-light text-dark "
              style={{ marginTop: "0%", height: "97.6%" }}
            >
              <div style={{ marginTop: "7%" }}>
                <div class="mx-auto">
                  <h2 style={{ textAlign: "center", marginBottom: "5%", marginTop: 0 }}>Sign Up</h2>
                </div>
                <p>Please Signup Before login to your Acount</p>
                {error && (
                  <ErrorNotice
                    message={error}
                    clearError={() => setError(undefined)}
                  />
                )}
                <div>
                  <form onSubmit={submit}>
                  <div className="mb-2">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        id="register-display-name"
                        className="form-control"
                        onChange={(e) => setDisplayName(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <label className="form-label">Contact No.</label>
                      <input
                        type="text"
                        id="contactNo"
                        className="form-control"
                        onChange={(e) => setContactNo(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="exampleInputEmail1" className="form-label" >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="register-email"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    
                    <div className="mb-2">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="register-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Verify Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="Verify password"
                        onChange={(e) => setPasswordCheck(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="role"
                        className="form-label"
                      >
                        Role
                      </label>
                      <select
                        className="form-control"
                        id="role"
                        name="role"
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="" selected="selected" disabled>
                          Select a Role                         
                        </option>
                        <option value="user">
                          User
                        </option>
                        <option value="seller">
                          Seller
                        </option>
                      </select>
                    </div>
                    {role==="seller"?(<div className="mb-2">
                      <p className="msg" style={{fontWeight:"bold"}}>Seller Details</p>
                      <div className="mb-2">
                      <label className="form-label" >                        
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="company"
                        onChange={(e) => setCompany(e.target.value)}
                      />
                      </div>
                      <div className="mb-2">
                      <label className="form-label" >                        
                        Location
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        onChange={(e) => setLocation(e.target.value)}
                      />
                      </div>
                      <div className="mb-4">
                      <label className="form-label" >                        
                        District
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="district"
                        onChange={(e) => setDistrict(e.target.value)}
                      />
                      </div>
                    </div>)
                    :null}

                    <button
                      type="submit"
                      className="btn btn-dark homeBtn"
                      value="Register"
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
                <p></p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
