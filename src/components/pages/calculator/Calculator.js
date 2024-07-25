import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../calculator/calculator.css';
import HeadingOne from '../../atoms/headings/headingOne/HeadingOne';
import Paragraph from '../../atoms/paragraphs/Paragraph';
import HeadingTwo from '../../atoms/headings/headingTwo/HeadingTwo';

const Calculator = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const [size, setSize] = useState('');
  const [county, setCounty] = useState('');
  const [projectType, setProjectType] = useState('');
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
    };

    if (name == 'size') setSize(parseInt(values.size));
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
      <div className='calculator-form-container'>
        <HeadingOne>Approvals Cost Calculator</HeadingOne>
        <Paragraph>
          Try it out and calculate how much the approval process in Kenya would
          cost based on your construction project
        </Paragraph>
        {
          <form className='calculator-form'>
            <div className='label-container'>
              <div className='label-one'>
                <label className='calc-form-label' htmlFor='size'>
                  Project size:
                </label>
              </div>
              <br />
              <div className='label-two'>
                <label className='calc-form-label' htmlFor='county'>
                  Select county:
                </label>
              </div>
              <br />
              <div className='label-three'>
                <label className='calc-form-label' htmlFor='county'>
                  Select project:
                </label>
              </div>
            </div>
            <div className='input-container'>
              <div className='input-one'>
                <input
                  className='calc-form-input'
                  type='number'
                  min='0'
                  id='size'
                  name='size'
                  placeholder='Enter size of the project'
                  value={size}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className='input-two'>
                <select
                  className='calc-form-input'
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
              </div>
              <br />
              <div className='input-three'>
                <select
                  className='calc-form-input'
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
              </div>
            </div>
          </form>
        }
        <div>
          <ul>
            {costs.map((cost, index) => (
              <li key={index}>
                <div className='cost-container'>
                  <div className='permit'>
                    <HeadingTwo>Kes {cost.building_permit_cost}</HeadingTwo>
                    <Paragraph>Building permit</Paragraph>
                    <br />
                  </div>
                  <div>
                    <HeadingTwo>Kes {cost.arch_building_cost}</HeadingTwo>
                    <Paragraph>Architectural building cost</Paragraph>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
