import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import SubmitButton from '../../atoms/buttons/SubmitButton';
// import '../calculator/calculator.css';
import HeadingOne from '../../atoms/headings/HeadingOne';
import Paragraph from '../../atoms/paragraphs/Paragraph';

const Calculator = () => {
  // const [num1, setNum1] = useState(0);
  // const [num2, setNum2] = useState(0);
  // let [result, setResult] = useState(0);

  // useEffect(() => {
  //   setResult(num1 + num2);
  // }, [num1, num2]);

  // const handleChange = (e) => {
  //   let value = parseInt(e.target.value);
  //   let name = e.target.name;

  //   if (name == 'num1') setNum1(value);
  //   if (name == 'num2') setNum2(value);

  //   setResult(num1 + num2);
  // };

  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const [size, setSize] = useState(0);
  const [county, setCounty] = useState('');
  const [projectType, setProjectType] = useState('');
  // const [cost, setCost] = useState(0);
  const [counties, setCounties] = useState([]);
  const [projectTypes, setProjectTypes] = useState([]);
  const [costs, setCosts] = useState([]);
  const countyReq = axios.get(`${baseUrl}counties-list/`);
  const projectTypeReq = axios.get(`${baseUrl}project-types-list/`);

  useEffect(() => {
    axios
      .all([countyReq, projectTypeReq])
      .then(
        axios.spread((...response) => {
          setCounties(response[0].data.results);
          setProjectTypes(response[1].data.results);
        }),
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = async (e) => {
    let name = e.target.name;

    const form = e.target.closest('form');
    const formParameters = new FormData(form);
    const values = {
      size: formParameters.get('size'),
      county: formParameters.get('county'),
      projectType: formParameters.get('projectType'),
      cost: formParameters.get('cost'),
    };

    if (name == 'size') setSize(parseInt(values.size));
    // if (name == 'cost') setCost(parseInt(values.cost));
    if (name == 'county') setCounty(values.county);
    if (name == 'projectType') setProjectType(values.projectType);

    try {
      const response = await axios.post(`${baseUrl}calculate-cost/`, values);
      setCosts([response.data.context]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='calculator-container'>
      <HeadingOne>Approvals Cost Calculator</HeadingOne>
      <Paragraph>
        Try it out and calculate how much the approval process in Kenya would
        cost based on your construction project
      </Paragraph>
      {
        <form>
          <label htmlFor='size'>Project size: </label>
          <input
            type='number'
            min='0'
            id='size'
            name='size'
            placeholder='Enter size of the project'
            value={size}
            onChange={handleChange}
          />
          <br />
          <label htmlFor='county'>Select county: </label>
          <select
            id='county'
            name='county'
            value={county}
            onChange={handleChange}
          >
            <option value=''>select a county</option>
            {counties &&
              counties.map((county) => (
                <option key={county.county_no} value={county.county_name}>
                  {county.county_name}
                </option>
              ))}
          </select>
          <br />
          <label htmlFor='projectType'>Select a project type: </label>
          <select
            id='projectType'
            name='projectType'
            value={projectType}
            onChange={handleChange}
          >
            <option value=''>select the project type: </option>
            {projectTypes.map((project) => (
              <option
                key={project.project_type_no}
                value={project.project_type_name}
              >
                {project.project_type_name}
              </option>
            ))}
          </select>
          {/* <br /> */}
          {/* <label htmlFor='cost'>Total cost of construction:</label>
          <input
            type='number'
            min='0'
            id='cost'
            name='cost'
            placeholder='Enter the cost of construction'
            value={cost}
            onChange={handleChange}
          /> */}
        </form>
      }
      <div>
        <h2>Calculated Costs</h2>
        <ul>
          {costs.map((cost, index) => (
            <li key={index}>
              <strong>Building Permit Cost:</strong> {cost.building_permit_cost}
              <br />
              <strong>Arch Building Cost:</strong> {cost.arch_building_cost}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
