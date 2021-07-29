import React from 'react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';

const CustomItem = styled.p`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:last-child {
    font-weight: 700;
  }
`;

const StatsItem = ({ name, value }) => {
  return (
    <CustomItem>
      {name}: {value}
    </CustomItem>
  );
};

StatsItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default StatsItem;
