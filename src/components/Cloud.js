import React, { Component } from 'react';
import Tag from '../components/Tag';
import PropTypes from 'prop-types';

class Cloud extends Component {
  render() {
    const { data, uniqueKey, width, tagFontSize} = this.props;
    const tags = data.sort((a,b) => (a.label < b.label ? -1 : 1));
    return data.length > 0 ? (<div className="cloud-container" style={{ width }}>
      {
        tags.map(tag => (<Tag key={tag.id} {...{ tag, uniqueKey, size: tagFontSize }} />))
      }
    </div>) : 'No data';
  }
}

Cloud.propTypes = {
  data: PropTypes.array,
  uniqueKey: PropTypes.string.isRequired,
  width: PropTypes.number,
  tagFontSize: PropTypes.number,
};

Cloud.defaultProps = {
  data: [],
  width: 500,
  tagFontSize: 14,
};

export default Cloud;
