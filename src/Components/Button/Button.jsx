import React from 'react';
import Button from './Button.styled';
import PropTypes from 'prop-types';

const VoteButton = ({ name, onClick, id }) => {
  const ucFirst = str => str[0].toUpperCase() + str.slice(1);
  return (
    <Button type="button" key={id} id={id} onClick={onClick}>
      {ucFirst(name)}
    </Button>
  );
};

VoteButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VoteButton;
