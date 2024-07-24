// import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import SubmitButton from '../../atoms/buttons/SubmitButton';
// import '../calculator/calculator.css';
// import HeadingOne from '../../atoms/headings/HeadingOne';
// import Paragraph from '../../atoms/paragraphs/Paragraph';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  let [result, setResult] = useState(0);

  useEffect(() => {
    setResult(num1 + num2);
  }, [num1, num2]);
  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    let name = e.target.name;

    if (name == 'num1') setNum1(value);
    if (name == 'num2') setNum2(value);

    setResult(num1 + num2);
  };
  // const baseUrl = process.env.REACT_APP_API_BASE_URL;
  // const [counties, setCounties] = useState([]);
  // const [projectType, setProjectType] = useState([]);
  // const [costs, setCosts] = useState([]);
  // const countyReq = axios.get(`${baseUrl}counties-list/`);
  // const projectTypeReq = axios.get(`${baseUrl}project-types-list/`);

  // useEffect(() => {
  //   axios
  //     .all([countyReq, projectTypeReq])
  //     .then(
  //       axios.spread((...response) => {
  //         setCounties(response[0].data.results);
  //         setProjectType(response[1].data.results);
  //       }),
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formParameters = new FormData(e.target);
  //   const values = {
  //     size: formParameters.get('size'),
  //     county: formParameters.get('county'),
  //     projectType: formParameters.get('projectType'),
  //     cost: formParameters.get('cost'),
  //   };

  //   axios
  //     .post(`${baseUrl}calculate-cost/`, values)
  //     .then((response) => {
  //       setCosts([response.data.context]);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  return (
    <div>
      <h1>Calculate the sum</h1>
      <form>
        <div>
          <input
            type='number'
            placeholder='num1'
            onChange={handleChange}
            name='num1'
            value={num1}
          />
          <input
            type='number'
            placeholder='num2'
            onChange={handleChange}
            name='num2'
            value={num2}
          />
          <p> sum: {result} </p>
        </div>
      </form>
    </div>
    // <div className='calculator-container'>
    //   <HeadingOne>Approvals Cost Calculator</HeadingOne>
    //   <Paragraph>
    //     Try it out and calculate how much the approval process in Kenya would
    //     cost based on your construction project
    //   </Paragraph>
    //   {
    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor='size'>Project size: </label>
    //       <input
    //         type='number'
    //         min='0'
    //         id='size'
    //         name='size'
    //         placeholder='Enter size of the project'
    //       />
    //       <br />
    //       <label htmlFor='county'>Select county: </label>
    //       <select id='county' name='county'>
    //         <option value=''>select a county</option>
    //         {counties &&
    //           counties.map((county) => (
    //             <option key={county.county_no} value={county.county_name}>
    //               {county.county_name}
    //             </option>
    //           ))}
    //       </select>
    //       <br />
    //       <label htmlFor='projectType'>Select a project type: </label>
    //       <select id='projectType' name='projectType'>
    //         <option value=''>select the project type: </option>
    //         {projectType.map((project) => (
    //           <option
    //             key={project.project_type_no}
    //             value={project.project_type_name}
    //           >
    //             {project.project_type_name}
    //           </option>
    //         ))}
    //       </select>
    //       <br />
    //       <label htmlFor='cost'>Total cost of construction:</label>
    //       <input
    //         type='number'
    //         min='0'
    //         id='cost'
    //         name='cost'
    //         placeholder='Enter the cost of construction'
    //       />
    //       <br />
    //       <SubmitButton />
    //     </form>
    //   }
    //   {costs.length > 0 ? (
    //     <div>
    //       <h2>Calculated Costs</h2>
    //       <ul>
    //         {costs.map((cost, index) => (
    //           <li key={index}>
    //             <strong>Building Permit Cost:</strong>{' '}
    //             {cost.building_permit_cost}
    //             <br />
    //             <strong>Arch Building Cost:</strong> {cost.arch_building_cost}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   ) : (
    //     <p>No costs available</p>
    //   )}
    // </div>
  );
};

export default Calculator;
