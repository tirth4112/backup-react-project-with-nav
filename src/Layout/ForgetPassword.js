import React from 'react'

const ForgetPassword = () => {
    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', 
      };
  return (
    <div  style={centerStyle}>
    <div className="login-box">
      <div className="login-logo">
        <a><b>RemmarkInfo</b>LTE</a>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <h3 className="login-box-msg">Forget-Password</h3>
          <form>
            <div className="input-group mb-3">
           
            </div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
            
              <div className="col-12">
               <button  className="btn btn-primary btn-block">
            Forget-Password
          </button>
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center mt-2">
         
          </div>
       
        </div>
      </div>
    </div>
    </div>  )
}

export default ForgetPassword