import React from 'react';
import { querySiteMetadata } from '../functions';
import logo from '../images/logo.svg';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  const { title } = querySiteMetadata();
  return (
    <img className={`site__logo ${className}`} src={logo} alt={title}></img>
  );
};
