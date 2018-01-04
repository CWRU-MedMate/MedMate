import React from 'react';
import logo from './cross.png';

const Signup = () => {
return (
  <div>
    <div className="modal fade" id="signup" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
          <span> <h5 className="modal-title">Signup <img src={logo} height="25" width="25" alt=""/></h5></span>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
              <form>
                  <div className="form-group">
                      <label for="usernameSignup">Username</label>
                      <input type="text" className="form-control" id="usernameSignup"/>
                  </div>
                  <div className="form-group">
                      <label for="passwordSignup">Password</label>
                      <input type="text" className="form-control" id="passwordSignup"/>
                  </div>
                  <div className="form-group">
                      <label for="email">Email</label>
                      <input type="email" className="form-control" id="email"/>
                  </div>
                  <div className="form-group">
                      <label for="phone">Phone</label>
                      <input type="tel" className="form-control" id="phone"/>
                  </div>
              </form>   
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-primary btn-modal" >Signup</button>
            <button type="button" className="btn btn-outline-secondary btn-modal" data-dismiss="modal">Exit</button>
          </div>
        </div>
      </div>
    </div> 
  </div>  
  );
};

export default Signup;