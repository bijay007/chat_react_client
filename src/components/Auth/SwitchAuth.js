import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import signup from 'assests/sign-up.png';
import login from 'assests/login.svg';

const Action = styled.img`
  height: 4rem;
  width: auto;
  padding: 0.25rem 1rem;
  transition: transform 0.5s ease;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

const SwitchAuth = (props) => {
  const logoTypes = {
    signup: signup,
    login: login
  }
  return (
    <Link to={`/${props.type}`}>
      <Action src={logoTypes[props.type]} />
    </Link>
  )
}

export default SwitchAuth;
