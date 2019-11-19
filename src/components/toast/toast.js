import React from 'react';
import './toast.css';

const ToastMessage = ({ message }) => {
  return <div className="toasted">{message}</div>;
};

export default ToastMessage;
