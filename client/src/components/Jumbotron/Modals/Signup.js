import logo from "./cross.png";
import axios from "axios";
import React, { Component } from "react";
import TextInput from "../../Input/TextInput";


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpForm: {
        nameSignup: "",
        loginNameSignup: "",
        emailSignup: "",
        passwordSignup: "",
        passwordConfirmationSignup: ""
      }
    };
    this.inputChange.bind(this);
  }

  submitNewUser = () => {
    axios.post("http://localhost:8080/api/signup", {
      user_name: this.state.signUpForm.nameSignup,
      login_name: this.state.signUpForm.loginNameSignup,
      email_address: this.state.signUpForm.emailSignup,
      password: this.state.signUpForm.passwordSignup,
    }).then((response)=>{  
      if(response.data.success){
       // this.props.login();
       axios.get("http://localhost:8080/api/isloggedin").then((response)=>{
        console.log(response.data);
       });
      }
    });
  };

  inputChange = (inputId, inputValue) => {
    const form = this.state.signUpForm;
    form[inputId] = inputValue;
    this.setState({ signUpForm: form });
  };

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="signup"
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
                    Signup <img src={logo} height="25" width="25" alt="" />
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
                    <label htmlFor="nameSignup">Name</label>
                    <TextInput htmlId="nameSignup" inputChange={this.inputChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="loginNameSignup">Login Name</label>
                    <TextInput htmlId="loginNameSignup" inputChange={this.inputChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="emailSignup">Email</label>
                    <TextInput htmlId="emailSignup" inputChange={this.inputChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordSignup">Password</label>
                    <TextInput htmlId="passwordSignup" inputChange={this.inputChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordConfirmationSignup">Confirm Password</label>
                    <TextInput htmlId="passwordConfirmationSignup" inputChange={this.inputChange}/>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-modal"
                  onClick={this.submitNewUser}
                  data-dismiss="modal"
                >
                  Signup
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-modal"
                  data-dismiss="modal"
                >
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
