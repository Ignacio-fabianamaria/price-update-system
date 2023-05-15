import React, { useState } from 'react';
import ResponseUpdatePrice from './ResponseUpdatePrice';
import { api } from '../services/request';
import '../styles/forms.css';


export default function Forms() {
  const [data, setData] = useState([]);
  const [showResponse, setShowResponse] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');

    const handleValidation = async () => {
      const fileInput = document.getElementById('fileInput');
      const file = fileInput.files[0];
  
      if (!file) {
        setErrorMessage('Nenhum arquivo foi anexado!');
        return;
      }
      const formData = new FormData();
      formData.append('file', file);
      try {
        const response = await api.post('/products', formData);
        const result = response.data;
        setData([result]);
        console.log([result])
        setShowResponse(true);
      } catch (error) {
        console.error(error);
      }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const sufix = file.name.endsWith('.csv')
    
        if (!sufix) {
          setErrorMessage('O formato do arquivo está incorreto. Por favor, selecione um arquivo .csv.');
        } 
      };

  return (
    <>
        <form >
        <input type="file" accept=".csv" id="fileInput" onChange={handleFileChange} />
        <button type="button" onClick={handleValidation}>VALIDAR</button>
      </form>
      {errorMessage && (
        <p style={{ visibility: errorMessage ? 'visible' : 'hidden', color:'red' }}>
          {errorMessage}
          </p>
      )}
      {showResponse && <ResponseUpdatePrice data={data} />} 

    </>
  );
}