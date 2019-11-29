import React from 'react';
import './toast.scss';

const ToastMessage = ({ message }) => {
  return <div className="toasted">{message}</div>;
};

export default ToastMessage;
