import styled from '@emotion/styled';

const NavButton = styled.button`
  background: none;
  border: none;
  outline-style: none;
  font-family: Arial;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  color: ${props => props.theme.colors.fontsecondary};
  text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.16);
  &:hover {
    color: ${props => props.theme.colors.fonttertiary};
  }
`;

export default NavButton;
