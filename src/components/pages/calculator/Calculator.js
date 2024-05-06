import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Calculator = () => {
  const [counties, setCounties] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/calculator/counties-list/')
      .then((response) => {
        setCounties(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Approvals</h1>
      {
        <form>
          <label htmlFor='counties'>Select county:</label>
          <select id='county'>
            <option value=''>select a county</option>
            {counties &&
              counties.map((county) => (
                <option key={county.county_no} value={county.county_no}>
                  {county.county_name}
                </option>
              ))}
          </select>
        </form>
      }
    </div>
  );
};

export default Calculator;
