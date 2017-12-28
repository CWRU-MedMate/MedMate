import React from 'react';
import "./jumbotron.css";
import logo from './cross.png'
export const Jumbotron = () => 
<div>
    <div className="jumbotron" id="jumboMain">
        <div className="container-fluid">
           <h1 id="heading">MedMate</h1>
           <h4 id="subheading">We remember so you don't have to!</h4>
           <button type="button" className="btn btn-outline-light btn-home" data-toggle="modal" data-target="#login">Login</button> <button type="button" className="btn btn-outline-light btn-home" data-toggle="modal" data-target="#exampleModal">Sign up</button>
        </div> 
    </div>


<div className="modal fade" id="login" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Login <span><img src={logo} height="25" width="25" alt=""/></span></h5>
          
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
            <form>
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="username"/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="text" className="form-control" id="password"/>
                </div>
            </form>   
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-outline-primary btn-modal" >Login</button>
          <button type="button" className="btn btn-outline-secondary btn-modal" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>  







