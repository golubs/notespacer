import styled from '@emotion/styled';

const Card = styled.div`
  margin: 0;
  border: 2px solid #327884;
  box-shadow: 0 2px 8px rgb(0, 0, 0, 0, 26);
  border-radius: 1px;
  padding: 1em;
  overflow: hidden;
  background: ${props => props.theme.colors.background};
`;

export default Card;
