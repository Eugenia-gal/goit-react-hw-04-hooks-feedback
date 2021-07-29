import React from 'react';
import PropTypes from 'prop-types';
import VoteButton from 'Components/Button';
import CustomOption from './FeedbackOptions.styled';

const FeedbackOptions = ({ options }) => {
  const ucFirst = str => str[0].toUpperCase() + str.slice(1);
  return (
    <CustomOption>
      {options.map(option => (
        <VoteButton
          key={option.name}
          name={ucFirst(option.name)}
          id={option.name}
          onClick={option.onLeaveFeedback}
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
