import React from 'react';
import Button from './Button.styled';
import PropTypes from 'prop-types';

const VoteButton = ({ name, onClick, id }) => {
  return (
    <Button type="button" key={id} id={id} onClick={onClick}>
      {name}
    </Button>
  );
};

VoteButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VoteButton;
