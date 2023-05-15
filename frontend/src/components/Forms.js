import React, { useState } from 'react';
import { api } from '../services/request';
import '../styles/forms.css';


export default function Forms() {
    const [errorMessage, setErrorMessage] = useState('');

    const handleValidation = async () => {
      const fileInput = document.getElementById('fileInput');
      const file = fileInput.files[0];
  
      if (!file) {
        setErrorMessage('Nenhum arquivo foi selecionado.');
        return;
      }
  
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await api.post('/products', formData);
        console.log(response.data + 'arquivo enviado');
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
        {errorMessage && (
        <p style={{ visibility: errorMessage ? 'visible' : 'hidden' }}>{errorMessage}</p>
      )}
      </form>
     
    </>
  );
}