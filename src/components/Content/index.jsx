import * as React from 'react';
import PropTypes from 'prop-types';

const Content = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

export default Content;
