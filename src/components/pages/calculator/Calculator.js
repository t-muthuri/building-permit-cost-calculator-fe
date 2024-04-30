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
      <form>
        {form && (
          <div>
            <label> Project size </label>
            <input
              type='number'
              name='size'
              id='size'
              defaultValue={form.project_size}
              required
            />
            <br />
            <br />
            <label> Type of project </label>
            <input
              type='text'
              name='project'
              id='project'
              defaultValue={form.type_of_project}
              required
            />
            <br />
            <br />
            <label> County </label>
            <input
              type='text'
              name='county'
              id='county'
              defaultValue={form.county}
              required
            />
            <br />
            <br />
            <label> Total cost of construction project </label>
            <input
              type='number'
              name='cost'
              id='cost'
              defaultValue={form.total_cost_of_construction_project}
              required
            />
          </div>
        )}
      </form>
      <br />
      <button>Submit</button>
    </div>
  );
};

export default Calculator;
