import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import NavButton from './NavButton';

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Li = styled.li`
  margin-right: 2rem;
`;

const NavLinks = () => {
  return (
    <Ul>
      <Li>
        <NavLink to="/notes">
          <NavButton>NOTES</NavButton>
        </NavLink>
      </Li>
      <Li>
        <NavLink to={`/notes?duedate_lte=${Date.now()}`}>
          <NavButton>DUE</NavButton>
        </NavLink>
      </Li>
    </Ul>
  );
};

export default NavLinks;
