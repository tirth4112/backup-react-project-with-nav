import React from 'react';
import axios from 'axios';
const Login = () => {
  
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', 
  };
  function Login(e){
    // debugger;
e.preventDefault();
    axios.get("https://mocki.io/v1/877bd043-ccb6-4267-a508-1f86107c9948"
      // "https://mocki.io/v1/032d59c5-bd66-4c16-b24e-f280d80f98d8"
      // "https://mocki.io/v1/17e271dd-718c-4f09-881a-1695af001a66"
      )
    .then((response) => {
      
      console.log(response.data);
      sessionStorage.setItem('routes', JSON.stringify(response.data));
      sessionStorage.setItem('login', JSON.stringify(true));
      window.location.href = "/";

    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div  style={centerStyle}>
    <div className="login-box">
      <div className="login-logo">
        <a href="../../index2.html"><b>Admin</b>LTE</a>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <h3 className="login-box-msg">Sign in to start your session</h3>
          <form>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </div>
              <div className="col-4">
               <button onClick={Login} className="btn btn-primary btn-block">
            Sign In
          </button>
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center mt-2">
            {/* <p>- OR -</p> */}
            {/* <a href="#" className="btn btn-block btn-primary">
              <i className="fab fa-facebook mr-2" /> Sign in using Facebook
            </a>
            <a href="#" className="btn btn-block btn-danger">
              <i className="fab fa-google-plus mr-2" /> Sign in using Google+
            </a> */}
          </div>
          {/* <p className="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p>
          <p className="mb-0">
            <a href="register.html" className="text-center">Register a new membership</a>
          </p> */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
