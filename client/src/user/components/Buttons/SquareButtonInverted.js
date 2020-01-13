import styled from '@emotion/styled';

const SquareButtonInverted = styled.button`
  background: transparent;
  font-family: Arial;
  font-weight: bold;
  font-size: 16px;
  line-height: 12px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  width: 295px;
  height: 48px;
  border: 2px solid ${props => props.theme.colors.primary};
`;

export default SquareButtonInverted;
