import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Calculator = () => {
  const [counties, setCounties] = useState([]);
  const [projectType, setProjectType] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/calculator/counties-list/')
      .then((response) => {
        setCounties(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/calculator/project-types-list/')
      .then((response) => {
        setProjectType(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formParameters = new FormData(e.target);
    const values = {
      size: formParameters.get('size'),
      county: formParameters.get('county'),
      projectType: formParameters.get('projectType'),
      cost: formParameters.get('cost'),
    };

    axios
      .post('http://localhost:8000/api/calculator/calculate-cost/', values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Approvals</h1>
      {
        <form onSubmit={handleSubmit}>
          <label htmlFor='size'>Project size: </label>
          <input type='number' id='size' name='size' />
          <br />
          <label htmlFor='counties'>Select county: </label>
          <select id='county' name='county'>
            <option value=''>select a county</option>
            {counties &&
              counties.map((county) => (
                <option key={county.county_no} value={county.county_name}>
                  {county.county_name}
                </option>
              ))}
          </select>
          <br />
          <label htmlFor='projectTypes'>Select a project type: </label>
          <select id='projectType' name='projectType'>
            <option value=''>select the project type: </option>
            {projectType.map((project) => (
              <option
                key={project.project_type_no}
                value={project.project_type_name}
              >
                {project.project_type_name}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor='cost'>Total cost of construction:</label>
          <input type='number' id='cost' name='cost' />
          <br />
          <button type='submit'>Calculate</button>
        </form>
      }
    </div>
  );
};

export default Calculator;
