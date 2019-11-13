import Axios from "axios";
import React, { Component } from "react";
import ToastMessage from "../toast/toast";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", //trupti.kashid@objectedge.com
      password: "", //Objectedge$10
      toastMessage: "",
      showToast: false
    };
  }

  validate(event) {
    console.log(this.userName.value, this.passWord.value);
    let { name, pass } = this.nameChange();
    if (name === "" || pass === "") {
      this.spaceToast();
    } else {
      this.validation(name, pass, event);
    }
    this.setState({ showToast: false });
  }

  spaceToast() {
    setTimeout(() => {
      this.setState({
        toastMessage: "All fields required!!",
        showToast: true
      });
    }, 500);
  }

  validation(name, pass, event) {
    const { regExUser, regExPass } = this.regExValidation(name, pass);
    if (regExUser && regExPass) {
      this.handleClick(event);
    } else {
      this.spaceInvalid(regExUser, regExPass);
      console.log("space");
    }
  }

  spaceInvalid(regExUser, regExPass) {
    let field = "";
    if (!regExUser) {
      field = "Username";
    }
    if (!regExPass) {
      field = "Password";
    }
    setTimeout(() => {
      this.setState({
        toastMessage: `${field} is Invalid. Space is not allowed!!`,
        showToast: true
      });
    }, 500);
  }

  nameChange() {
    let name = this.userName.value;
    let pass = this.passWord.value;
    return { name, pass };
  }

  regExValidation(name, pass) {
    const regExUser = /^\S*$/.test(name);
    const regExPass = /^\S*$/.test(pass);
    return { regExUser, regExPass };
  }

  handleClick(event) {
    Axios({
      method: "post",
      url:
        "https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login",
      data: {
        username: this.userName.value, //trupti.kashid@objectedge.com
        password: this.passWord.value //Objectedge$10
      },
      headers: {
        authorization: "Bearer YWRtaW46YWRtaW4=",
        "content-type": "application/json"
      }
    })
      .then(response => {
        this.setState({ toastMessage: "User is Authorised!" });
        this.setState({ showToast: true });
      })
      .catch(error => {
        this.setState({ toastMessage: "User is unauthorized" });
        this.setState({ showToast: true });
      });
    this.setState({ showToast: false });
  }

  render() {
    return (
      <div>
        {this.state.showToast ? (
          <ToastMessage message={this.state.toastMessage} />
        ) : null}
        <div className="split left center">
          <div>
            <div>
              <h2>Login</h2>
            </div>
            <div>
              <label>
                <h5>Name:</h5>
                <input
                  className="box"
                  ref={ref => {
                    this.userName = ref;
                  }}
                  type="text"
                ></input>
              </label>
            </div>
            <div>
              <label>
                <h5>Password:</h5>
                <input
                  className="box"
                  ref={ref => {
                    this.passWord = ref;
                  }}
                  type="password"
                ></input>
              </label>
            </div>
            <div>
              <input
                type="submit"
                onClick={event => this.validate(event)}
                value="Submit"
                className="sub"
              ></input>
            </div>
          </div>
        </div>
        <div className="split right image"></div>
      </div>
    );
  }
}

export default Login;
