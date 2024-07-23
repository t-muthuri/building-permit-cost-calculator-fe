import React from 'react';
import '../headings/headingOne.css';
import PropTypes from 'prop-types';

const HeadingOne = ({ children }) => {
  return <div className='heading-one-container'>{children}</div>;
};

HeadingOne.propTypes = {
  children: PropTypes.toString.isRequired,
};

export default HeadingOne;
