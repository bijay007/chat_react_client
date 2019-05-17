import React from 'react';
import styled from 'styled-components';
import companyLogo from 'assests/company.png';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  max-height: 20vh;
`
const Title = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  h1 {
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);
    margin: 0;
    padding-right: 2rem;
  }
  div {
    background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-right: 2rem;
  }
`
const Logo = styled.img`
  position: relative;
  top: 0.25rem;
  width: auto;
  height: 2rem;
`

const Header = () => (
  <Wrapper>
    <Title>
      <h1>Chatter</h1>
      <div>By</div>
    </Title>
    <Logo src={companyLogo} />
  </Wrapper>
)

export default Header;
