import React from 'react';
import data from '../utils/data';
import TagDetails from '../components/TagDetails';

const TagView = ({ match }) => {
  const { id } = match.params;
  const normalizedData = {};
  data.forEach((tag) => {
    normalizedData[tag.id] = tag;
  });
  const tag = normalizedData[id];
  return tag ? <TagDetails details={tag}/> : null;
};

export default TagView;
