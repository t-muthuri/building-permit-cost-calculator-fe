import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Calculator = () => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/calculator/counties-list/')
      .then((response) => {
        setForm(response.data.form);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/api/calculator/', {
        project_size: e.target.size.value,
        type_of_project: e.target.project.value,
        county: e.target.county.value,
        total_cost_of_construction_project: e.target.cost.value,
      })
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
      <form onSubmit={handleSubmit}>
        {form && (
          <div>
            {/* <label> Project size </label>
            <input
              type='number'
              name='size'
              id='size'
              defaultValue={form.project_size}
              required
            /> */}
            <br />
            <br />
            {/* <label> Type of project </label>
            <input
              type='text'
              name='project'
              id='project'
              defaultValue={form.type_of_project}
              required
            /> */}
            <br />
            <br />
            <label> County </label>
            <input
              type='text'
              name='county'
              id='county'
              defaultValue={form.counties}
              required
            />
            <br />
            <br />
            {/* <label> Total cost of construction project </label>
            <input
              type='number'
              name='cost'
              id='cost'
              defaultValue={form.total_cost_of_construction_project}
              required
            /> */}
            <br />
            <br />
            <button type='submit'> Calculate </button>
          </div>
        )}
      </form>
      <br />
    </div>
  );
};

export default Calculator;
