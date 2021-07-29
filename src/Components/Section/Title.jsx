import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

const CustomTitle = styled.h1`
  font-size: 24px;
  margin: 20px auto;
`;

function Title({ name }) {
  return <CustomTitle>{name}</CustomTitle>;
}

Title.propTypes = {
  name: PropTypes.string.isRequired
};

export default Title;
