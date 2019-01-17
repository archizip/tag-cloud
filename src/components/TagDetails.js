import React from 'react';

const TagDetails = ({ details: { sentiment, label, pageType } }) => {
  let total = 0;
  for (const key in sentiment) {
    if (sentiment.hasOwnProperty(key)) {
      total += sentiment[key];
    }
  }
  return (
    <div className="tag-details">
      <h1>Details: "{label}"</h1>
      <div className="row">
        <span className="label">Total Mentions: </span> {total}
      </div>
      <div className="row">
        <span className="label">Positive Mentions: </span> {sentiment.positive || 0}
      </div>
      <div className="row">
        <span className="label">Neutral Mentions:</span> {sentiment.neutral || 0}
      </div>
      <div className="row">
        <span className="label">Negative Mentions:</span>{sentiment.negative || 0}
      </div>
      <div className="row">
        <span className="label">Pages:</span>
      </div>
      <ol className="pages">
        {
          Object.keys(pageType).map((key, index) => {
            return <li key={index}>{key} {pageType[key]}</li>;
          })
        }
      </ol>
    </div>
  );
};

export default TagDetails;
