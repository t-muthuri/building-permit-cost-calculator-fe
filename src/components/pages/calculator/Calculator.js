import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Calculator = () => {
  const [form, setForm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/calculator/')
      .then((response) => {
        setForm(response.data.form);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Approvals</h1>
      <p>{JSON.stringify(form)}</p>
    </div>
  );
};

export default Calculator;
