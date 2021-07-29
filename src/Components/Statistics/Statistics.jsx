import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import StatsItem from './StatsItem';
import Container from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      <Title name="Statistics" />
      <StatsItem name="Good" value={good}></StatsItem>
      <StatsItem name="Neutral" value={neutral}></StatsItem>
      <StatsItem name="Bad" value={bad}></StatsItem>
      <StatsItem name="Total" value={total()}></StatsItem>
      <StatsItem
        name="Positive feedback"
        value={total() && positivePercentage() + '%'}
      ></StatsItem>
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
