import axios from 'axios';
import React, { useEffect, useState } from 'react';

const News = () => {
  const newsUrl = process.env.REACT_APP_API_NEWS_HEADLINES;
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    axios
      .get(newsUrl)
      .then((response) => {
        setHeadlines(response.data);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

  return (
    <div>
      <h1> The latest news on construction </h1>
      <ul>
        {headlines.map((headline) => (
          <li key={headline.id}>
            <a href={headline.url} target='_blank' rel='noopener noreferrer'>
              {headline.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
