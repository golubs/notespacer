import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

const ItemContent = styled(Card)`
  padding: 0;
`;

const Item = styled.div`
  margin: 1rem 0;
  color: black;
`;

const ItemInfo = styled.div`
  padding: 1rem;
  text-align: center;
`;

const DateInfo = styled.div`
  border-top: 1px solid #327884;
  text-align: center;
`;

const ItemActions = styled.div`
  padding: 1rem;
  text-align: center;
  background: #327884;
`;

const NoteItem = props => {
  const date = new Date(props.timestamp);
  const duedate = new Date(props.duedate);
  return (
    <Item>
      <ItemContent>
        <ItemInfo>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </ItemInfo>
        <DateInfo>
          <h3>{duedate.toLocaleDateString()}</h3>
          <p>{date.toLocaleDateString()}</p>
        </DateInfo>
        <ItemActions>
          <Button>EDIT</Button>
          <Button>DELETE</Button>
        </ItemActions>
      </ItemContent>
    </Item>
  );
};

NoteItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  duedate: PropTypes.number,
  timestamp: PropTypes.number
};

export default NoteItem;
