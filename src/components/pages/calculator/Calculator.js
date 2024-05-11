import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Calculator = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  // Call useState at the top level to declare a state variable
  // `set` triggers a re-render
  // initialize with an empty array - this prevents the undefined error when trying to map over the variable's initial state
  const [counties, setCounties] = useState([]); //use to updat
  const [projectType, setProjectType] = useState([]);
  const [costs, setCosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}counties-list/`)
      .then((response) => {
        // update current counties state to an array of counties fetched from the be
        setCounties(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}project-types-list/`)
      .then((response) => {
        // update current projectType state to an array of project types
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
      .post(`${baseUrl}calculate-cost/`, values)
      .then((response) => {
        // update current costs state to an array of costs received from the backend
        setCosts([response.data.context]);
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
      {/* update the component */}
      {costs.length > 0 ? (
        <div>
          <h2>Calculated Costs</h2>
          <ul>
            {costs.map((cost, index) => (
              <li key={index}>
                <strong>Building Permit Cost:</strong>{' '}
                {cost.building_permit_cost}
                <br />
                <strong>Arch Building Cost:</strong> {cost.arch_building_cost}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No costs available</p>
      )}
    </div>
  );
};

export default Calculator;
