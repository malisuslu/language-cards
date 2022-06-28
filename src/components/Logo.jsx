import React from 'react';
import rlogo from '../assets/react.svg';
import '../stylesheets/components/logo.scss';

function Logo() {
  return (
    <img className="logo" src = {rlogo} alt="React Logo" />
  );
}

export default Logo;