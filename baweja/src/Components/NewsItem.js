import React from 'react';


const NewsItem = ({ article }) => {
  const { title, description, url, publishedAt } = article;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Published at: {publishedAt}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
      <hr />
    </div>
  );
};

export default NewsItem;
