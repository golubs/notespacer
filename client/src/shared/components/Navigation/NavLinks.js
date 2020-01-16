import React from 'react';
import { useLocation } from 'react-router-dom';
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
  margin-right: 1rem;
`;

const NavLinks = () => {
  const location = useLocation();
  return (
    <Ul>
      <Li>
        <NavLink to="/notes">
          <NavButton active={!location.search}>NOTES</NavButton>
        </NavLink>
      </Li>
      <Li>
        <NavLink to={`/notes?duedate_lte=${Date.now()}`}>
          <NavButton active={location.search}>DUE </NavButton>
        </NavLink>
      </Li>
    </Ul>
  );
};

export default NavLinks;
