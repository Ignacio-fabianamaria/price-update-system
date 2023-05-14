import React from 'react';
import '../styles/forms.css';


export default function Forms() {
  return (
    <>
        <form >
        <input type="file" accept=".csv"  />
        <button type="submit">VALIDAR</button>
      </form>
     
    </>
  );
}