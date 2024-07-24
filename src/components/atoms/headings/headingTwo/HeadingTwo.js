import React from 'react';
import '../headingTwo/headingTwo.css';
import PropTypes from 'prop-types';

const HeadingTwo = ({ children }) => {
  return <div className='heading-one-container'>{children}</div>;
};

HeadingTwo.propTypes = {
  children: PropTypes.toString.isRequired,
};

export default HeadingTwo;
