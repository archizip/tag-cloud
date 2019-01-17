import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tag = ({ tag, uniqueKey, size }) => {
  const generateSize = () => {
    const fontSize = (tag[uniqueKey] / 5) + 5;
    return size > fontSize ? size : fontSize;
  };

  return (
    <div className="tag" style={{ fontSize: generateSize() }}>
      <Link to={{ pathname: 'tag' + tag.id }}>{tag.label}</Link>
    </div>
  );
};

Tag.propTypes = {
  uniqueKey: PropTypes.string.isRequired
};

export default Tag;
