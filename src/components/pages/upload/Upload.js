import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Upload = () => {
  const [fileName, setFileName] = useState('');
  const [files, setFiles] = useState([{}]);
  const uploadUrl = process.env.REACT_APP_API_UPLOAD_URL;
  const saveFile = () => {
    let formData = new FormData();
    formData.append('pdf', fileName);

    let axiosConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    console.log(formData);

    axios
      .post(`${uploadUrl}files/`, formData, axiosConfig)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const getFiles = () => {
    axios
      .get(`${uploadUrl}files/`)
      .then((response) => {
        setFiles(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  useEffect(() => {
    getFiles();
    console.log(files);
  }, []);

  return (
    <div>
      <form>
        <label htmlFor='file'>Browse a file to upload:</label>
        <input
          onChange={(e) => setFileName(e.target.files[0])}
          name='file'
          id='file'
          type='file'
          placeholder='Upload a file'
        />
        <br />
        <input type='submit' name='submit' id='submit' onClick={saveFile} />
      </form>
      <h1>Uploaded files</h1>
      <table>
        <thead>
          <tr>
            <th>File name</th>
            <th>Download file</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => {
            return (
              <tr key={file.id}>
                <td>{file.pdf}</td>
                <td>
                  <button>Download</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Upload;
