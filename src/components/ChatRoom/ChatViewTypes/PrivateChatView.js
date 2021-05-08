import React from 'react';
import styled from 'styled-components';
// Apollo
import { withApollo } from 'react-apollo';

const Wrapper = styled.div`
  display: flex;
  flex: 2;
  padding: 1rem;
`

const PrivateChatView = (props) => {
  return <Wrapper>Here private chats section will appear.</Wrapper>
}

export default withApollo(PrivateChatView);
