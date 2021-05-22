import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import togglePrivateTab from 'redux/actions/tabActions';

import rightIcon from 'assets/icons/right-arrow-icon.svg';
import leftIcon from 'assets/icons/left-arrow-icon.svg';

const TabToggler = styled.div`
  width: 2rem;
  padding: 0.25rem;
  background-color: var(--primary-color);
`

const PrivateTabToggler = () => {
  const tabStatusOpen = useSelector(state => state.tabCurrentState.tabOpen);
  const dispatch = useDispatch();
  return (
    <TabToggler onClick={ () => dispatch(togglePrivateTab(!tabStatusOpen)) }>
      <img alt="tab-status" src={ tabStatusOpen ? rightIcon : leftIcon }></img>
    </TabToggler>
  )
}

export default PrivateTabToggler;
