import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/">Sign Up</NavLink></li>
      <li><NavLink to="/">Log In</NavLink></li>
    </ul>
  )
}
export default SignedOutLinks