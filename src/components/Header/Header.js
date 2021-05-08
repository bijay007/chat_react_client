import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import home from 'assests/home-icon.svg';

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: var(--primary-color);
  padding: 1rem 0;
  button {
    width: 2.5rem;
    overflow: hidden;
    img {
      transition: transform .5s ease;
      :hover {
        transform: scale(1.05);
      }
    }
  }
  @media (max-width: 502px) {
    flex-direction: column;
    align-items: center;
  }
`
const Title = styled.div`
  padding-left: 1rem;
  h2 {
    font-weight: 500;
    font-size: 1.8rem;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #d7d319 0%, #fd1d1d 50%, #784a4a 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
