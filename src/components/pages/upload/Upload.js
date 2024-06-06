import React from 'react';

const Upload = () => {
  return (
    <div>
      <form>
        <label htmlFor='file'>Browse a file to upload:</label>
        <input name='file' id='file' type='file' placeholder='Upload a file' />
        <br />
        <input type='submit' name='submit' id='submit' />
      </form>
      <h1>Uploaded files</h1>
      <table>
        <tr>
          <th>File name</th>
          <th>Download file</th>
        </tr>
        <tr>
          <td></td>
          <td>
            <button>Download</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Upload;
