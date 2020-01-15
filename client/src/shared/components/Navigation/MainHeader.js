import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Header = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #ee6665;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.16);
  padding: 0 1rem;
  z-index: 5;
`;

const MainHeader = props => <Header>{props.children}</Header>;

MainHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainHeader;
