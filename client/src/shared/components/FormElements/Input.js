import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FormControl = styled.div`
  margin: 1rem 0;
  & > label,
  & > input,
  & > textarea {
    display: block;
  }
  & > label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  & > input,
  & > textarea {
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    background: #f8f8f8;
    padding: 0.15rem 0.25rem;
    &:focus {
      outline: none;
      background: #ebebeb;
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;

const Input = props => {
  const element =
    props.element === 'input' ? (
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    ) : (
      <textarea id={props.id} rows={props.rows || 20} />
    );

  return (
    <FormControl>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </FormControl>
  );
};

Input.propTypes = {
  element: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  label: PropTypes.string
};

export default Input;
