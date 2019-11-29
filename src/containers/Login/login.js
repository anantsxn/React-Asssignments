import Axios from 'axios';
import React, { Component } from 'react';
import ToastMessage from '../../components/toast/toast';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // trupti.kashid@objectedge.com
      // Objectedge$10
      toastMessage: '',
      showToast: false
    };
  }

  validate() {
    const { name, pass } = this.nameChange();
    if (name === '' || pass === '') {
      this.spaceToast();
    } else {
      this.validation(name, pass);
    }
    this.setState({ showToast: false });
  }

  spaceToast() {
    setTimeout(() => {
      this.setState({
        toastMessage: 'All fields required!!',
        showToast: true
      });
    }, 500);
  }

  validation(name, pass) {
    const { regExUser, regExPass } = this.regExValidation(name, pass);
    if (regExUser && regExPass) {
      this.handleClick();
    } else {
      this.spaceInvalid(regExUser, regExPass);
    }
  }

  spaceInvalid(regExUser, regExPass) {
    let field = '';
    if (!regExUser) {
      field = 'Username';
    }
    if (!regExPass) {
      field = 'Password';
    }
    setTimeout(() => {
      this.setState({
        toastMessage: `${field} is Invalid. Space is not allowed!!`,
        showToast: true
      });
    }, 500);
  }

  nameChange() {
    const name = this.userName.value;
    const pass = this.passWord.value;
    return { name, pass };
  }

  regExValidation(name, pass) {
    const regex = /^\S*$/;
    const regExUser = regex.test(name);
    const regExPass = regex.test(pass);
    return { regExUser, regExPass };
  }

  handleClick() {
    Axios({
      method: 'post',
      url:
        'https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login',
      data: {
        username: this.userName.value, // trupti.kashid@objectedge.com
        password: this.passWord.value // Objectedge$10
      },
      headers: {
        'Authorization': 'Bearer YWRtaW46YWRtaW4=',
        'content-type': 'application/json'
      }
    })
      .then(() => {
        this.setState(
          {
            toastMessage: 'User is Authorised!',
            showToast: true
          }
        );
      })
      .catch(() => {
        this.setState(
          {
            toastMessage: 'User is unauthorized',
            showToast: true
          }
        );
      });
    this.setState({ showToast: false });
  }

  render() {
    const { state } = this;
    return (
      <div>
        {state.showToast ? <ToastMessage message={state.toastMessage} /> : null}
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
                />
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
                />
              </label>
            </div>
            <div>
              <input
                type="submit"
                onClick={() => this.validate()}
                value="Submit"
                className="sub"
              />
            </div>
          </div>
        </div>
        <div className="split right image" />
      </div>
    );
  }
}

export default Login;
