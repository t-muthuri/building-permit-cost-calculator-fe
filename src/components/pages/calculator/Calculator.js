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

  return (
    <div>
      <h1>Approvals</h1>
      {
        <form>
          <label htmlFor='size'>Project size: </label>
          <input type='number' id='size' name='size' />
          <br />
          <label htmlFor='counties'>Select county: </label>
          <select id='county'>
            <option value=''>select a county</option>
            {counties &&
              counties.map((county) => (
                <option key={county.county_no} value={county.county_no}>
                  {county.county_name}
                </option>
              ))}
          </select>
          <br />
          <label htmlFor='projectTypes'>Select a project type: </label>
          <select id='projectTypes'>
            <option value=''>select the project type: </option>
            {projectType.map((project) => (
              <option
                key={project.project_type_no}
                value={project.project_type_no}
              >
                {project.project_type_name}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor='cost'>Total cost of construction:</label>
          <input type='number' id='cost' name='cost' />
          <br />
          <button>Calculate</button>
        </form>
      }
    </div>
  );
};

export default Calculator;
