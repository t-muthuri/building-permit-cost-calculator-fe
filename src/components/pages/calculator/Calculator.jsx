import axios from 'axios';
import { useEffect, useState } from 'react';
import '../calculator/calculator.css';
import HeadingOne from '../../atoms/headings/headingOne/HeadingOne';
import Paragraph from '../../atoms/paragraphs/Paragraph';
import HeadingTwo from '../../atoms/headings/headingTwo/HeadingTwo';

const Calculator = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
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

    // Trigger calculation only if all fields have values
    if (values.size && values.county && values.projectType) {
      try {
        const response = await axios.post(`${baseUrl}calculate-cost/`, values);
        setCosts([response.data.context]);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className='calculator-container'>
      <div className='calculator-frame'>
        <div className='calculator-card'>
          <div className='visuals-col'>
            <div className='map-placeholder'>
              <HeadingOne>Kenya</HeadingOne>
              {county && (
                <Paragraph className='selected-county-label'>
                  {county}
                </Paragraph>
              )}
            </div>
            <div className='results-overlay'>
              {costs.length > 0 && (
                <ul className='costs-list'>
                  {costs.map((cost, index) => (
                    <li key={index}>
                      <div className='cost-item'>
                        <HeadingTwo>
                          KES {cost.building_permit_cost.toLocaleString()}
                        </HeadingTwo>
                        <Paragraph>Permit Fee</Paragraph>
                      </div>
                      <div className='cost-item'>
                        <HeadingTwo>
                          KES {cost.arch_building_cost.toLocaleString()}
                        </HeadingTwo>
                        <Paragraph>Arch. Cost</Paragraph>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className='controls-col'>
            <div className='header-section'>
              <HeadingOne>Approvals Cost</HeadingOne>
              <Paragraph>Calculate construction approval costs.</Paragraph>
            </div>
            <form className='calculator-form'>
              <div className='form-group'>
                <label className='calc-form-label' htmlFor='size'>
                  Project Size (sqm)
                </label>
                <input
                  className='calc-form-input'
                  type='number'
                  min='0'
                  id='size'
                  name='size'
                  placeholder='0'
                  value={size}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <label className='calc-form-label' htmlFor='county'>
                  county
                </label>
                <select
                  className='calc-form-input'
                  id='county'
                  name='county'
                  value={county}
                  onChange={handleChange}
                >
                  <option value=''>Select County</option>
                  {counties &&
                    counties.map((c) => (
                      <option key={c.county_no} value={c.county_name}>
                        {c.county_name}
                      </option>
                    ))}
                </select>
              </div>
              <div className='form-group'>
                <label className='calc-form-label' htmlFor='projectType'>
                  Project Type
                </label>
                <select
                  className='calc-form-input'
                  id='projectType'
                  name='projectType'
                  value={projectType}
                  onChange={handleChange}
                >
                  <option value=''>Select Type</option>
                  {projectTypes.map((p) => (
                    <option key={p.project_type_no} value={p.project_type_name}>
                      {p.project_type_name}
                    </option>
                  ))}
                </select>
              </div>
            </form>
            <div className='footer-icons'>
              <span>🏠</span> <span>🏭</span> <span>🏢</span> <span>⛪</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
