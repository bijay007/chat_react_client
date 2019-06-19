import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  max-height: 20vh;
`
const Title = styled.div`
  display: flex;
  align-items: center;
  h1 {
    text-shadow: 2px 8px 6px rgba(0,0,0,0.3), 0px -5px 35px rgba(255,255,255,0.3);
    margin: 0;
    padding-right: 2rem;
  }
  div {
    font-weight: 600;
    font-size: 1.8rem;
    letter-spacing: 2px;
    background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-right: 2rem;
  }
`

const Header = () => (
  <Wrapper>
    <Title>
      <h1>Chatter</h1>
      <div>by Bijay</div>
    </Title>
  </Wrapper>
)

export default Header;
