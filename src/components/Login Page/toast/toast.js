import React, { Component } from "react";
import "./toast.css";

class ToastMessage extends Component {
  render() {
    return <div className="toasted">{this.props.message}</div>;
  }
}

export default ToastMessage;
