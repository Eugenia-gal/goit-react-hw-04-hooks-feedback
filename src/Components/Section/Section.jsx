import React from 'react';
import PropTypes from 'prop-types';
import CustonSection from './Section.styled';
import Title from './Title';

const Section = ({ title, children }) => {
  return (
    <CustonSection>
      <Title name={title} />
      {children}
    </CustonSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
