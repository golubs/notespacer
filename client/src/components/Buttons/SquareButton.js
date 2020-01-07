import styled from '@emotion/styled';

const SquareButton = styled.button`
  background: ${props => props.theme.colors.primary};
  font-family: Arial;
  font-weight: bold;
  font-size: 16px;
  line-height: 12px;
  text-align: center;
  color: ${props => props.theme.colors.secondary_font};
  width: 295px;
  height: 48px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.16);
`;

export default SquareButton;
