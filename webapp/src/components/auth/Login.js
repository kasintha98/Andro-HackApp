import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import Cal from "../../images/cal.png";
import constants from "../../constants/constants";

import "../../css/style.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        constants.backend_url + "/users/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      localStorage.setItem("user", loginRes.data.user.id);
      localStorage.setItem("role", loginRes.data.user.role);

      if (localStorage.getItem("role") === "seller") {
        history.push("/SpaceDetails");
      }
      history.push("/UserMain");
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
          style={{ marginTop: "4%", backgroundColor: "white" }}
        >
          <div class="row" style={{ marginTop: "1%" }}>
            <img src={Cal} class="img-thumbnail homeImg" alt="..." />
          </div>
          <div class="row">
            <div
              class="container-sm   p-3 mb-5 bg-body rounded bg-light text-dark "
              style={{ marginTop: "13%", height: "90%" }}
            >
              <div>
                <div class="mx-auto">
                  <h2
                    style={{
                      textAlign: "center",
                      marginBottom: "5%",
                      marginTop: 0,
                    }}
                  >
                    Login
                  </h2>
                </div>
                <p className="msg">Please Login to your Acount</p>
                {error && (
                  <ErrorNotice
                    message={error}
                    clearError={() => setError(undefined)}
                  />
                )}
                <div>
                  <form onSubmit={submit}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="login-email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="login-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-dark homeBtn"
                      value="Log in"
                    >
                      Sign In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="page">
    //   <h2>Log in</h2>
    //   {error && (
    //     <ErrorNotice message={error} clearError={() => setError(undefined)} />
    //   )}
    //   <form className="form" onSubmit={submit}>
    //     <label htmlFor="login-email">Email</label>
    //     <input
    //       id="login-email"
    //       type="email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />

    //     <label htmlFor="login-password">Password</label>
    //     <input
    //       id="login-password"
    //       type="password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />

    //     <input type="submit" value="Log in" />
    //   </form>
    // </div>
  );
}
