import React, { Component } from "react";
import logo from "./cross.png";

class Login extends React.Component {
  render() {
    return(
    <div>
      <div
        className="modal fade"
        id="login"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span>
                {" "}
                <h5 className="modal-title">
                  Login <img src={logo} height="25" width="25" alt="" />
                </h5>
              </span>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="text" className="form-control" id="password" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-primary btn-modal"
                data-dismiss="modal"                
                onClick={this.props.login}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-modal"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}
export default Login;
