import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import home from 'assests/home-icon.svg';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  max-height: 20vh;
  button {
    width: 2.5rem;
    min-width: 2rem;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 3rem;
  h1 {
    text-shadow: 2px 8px 6px rgba(0,0,0,0.3), 0px -5px 35px rgba(255,255,255,0.3);
    padding-right: 2rem;
    font-weight: 700;
    font-size: 1.9rem;
  }
  h2 {
    font-weight: 500;
    font-size: 1.7rem;
    letter-spacing: 2px;
    background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 502px) {
    flex-direction: column;
  }

`

const Header = () => (
  <Wrapper>
    <Link to='/'>
      <button>
        <img alt='go-home' src={home}/>
      </button>
    </Link>
    <Title>
      <h1>Chatter</h1>
      <h2>by Bijay</h2>
    </Title>
  </Wrapper>
)

export default Header;
