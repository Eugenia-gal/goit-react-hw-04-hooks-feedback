import React from 'react';
import PropTypes from 'prop-types';
import VoteButton from 'Components/Button';
import CustomOption from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <CustomOption>
      {options.map(option => (
        <VoteButton
          key={option.name}
          name={option.name}
          id={option.name}
          onClick={onLeaveFeedback}
        />
      ))}
    </CustomOption>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      onLeaveFeedback: PropTypes.func,
    }),
  ),
};

export default FeedbackOptions;
