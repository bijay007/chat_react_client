import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import home from 'assests/home-icon.svg';

const Wrapper = styled.header`
  display: flex;
  padding: 1rem 2rem;
  button {
    width: 2.5rem;
    min-width: 2rem;
  }
`
const Title = styled.div`
  padding-left: 1rem;
  h2 {
    font-weight: 500;
    font-size: 1.7rem;
    letter-spacing: 2px;
    background: linear-gradient(to right, #30CFD0 00%, #472076 100%);
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
      <h2>Chatter by Bijay</h2>
    </Title>
  </Wrapper>
)

export default Header;
