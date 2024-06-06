import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Upload = () => {
  const [fileName, setFileName] = useState('');
  const [files, setFiles] = useState([{}]);
  const uploadUrl = process.env.REACT_APP_API_UPLOAD_URL;
  const [status, setStatus] = useState('');
  const saveFile = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('pdf', fileName);

    let axiosConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    axios
      .post(`${uploadUrl}files/`, formData, axiosConfig)
      .then((response) => {
        console.log(response.data);
        setStatus('File upload successful');
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
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  useEffect(() => {
    getFiles();
    // console.log(files);
  }, []);

  const downloadFile = (response, title) => {
    console.log(response);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', title + '.pdf');
    document.body.appendChild(link);
    link.click();
  };

  const downloadWithAxios = (url, title) => {
    axios({
      method: 'get',
      url,
      responseType: 'arraybuffer',
    })
      .then((response) => {
        downloadFile(response, title);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

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
        <br />
        {status ? <p> {status} </p> : null}
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
          {files.map((file, index) => {
            return (
              <tr key={index}>
                <td>{file.pdf}</td>
                <td>
                  <button onClick={() => downloadWithAxios(file.pdf, file.id)}>
                    Download
                  </button>
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
