import React from 'react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';

const CustomTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

function Title({ name }) {
  return <CustomTitle>{name}</CustomTitle>;
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
