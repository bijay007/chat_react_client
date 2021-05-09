import React from 'react';
import styled from 'styled-components';
// Apollo
import { withApollo } from '@apollo/client/react/hoc';

const Wrapper = styled.div`
  display: flex;
  flex: 2;
  padding: 1rem;
  background-color: var(--tertiary-color);
`

const PrivateChatView = (props) => {
  return <Wrapper>Here private chats section will appear.</Wrapper>
}

export default withApollo(PrivateChatView);
