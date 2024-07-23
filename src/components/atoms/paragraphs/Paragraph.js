import React from 'react';
import '../paragraphs/paragraph.css';
import PropTypes from 'prop-types';

const Paragraph = ({ children }) => {
  return <div className='paragraph-container'>{children}</div>;
};

Paragraph.propTypes = {
  children: PropTypes.toString.isRequired,
};

export default Paragraph;
