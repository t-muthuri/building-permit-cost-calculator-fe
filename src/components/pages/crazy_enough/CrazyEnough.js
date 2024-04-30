import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CrazyEnough = () => {
  const [message, setMessage] = useState('');

  // make an http request to the crazy-enough API endpoint defined in the be
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/crazy_enough/')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>__Steve Jobs</h1>
      <p>{message}</p>
    </div>
  );
};

export default CrazyEnough;
