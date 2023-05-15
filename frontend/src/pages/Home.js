import React, { useState } from 'react';
import Forms from '../components/Forms';
import Products from '../components/Products';
import '../styles/home.css'

export default function Home() {
  const [showProducts, setShowProducts] = useState(false);
  const handleBtnUpdate = () => {
    setShowProducts(true)
  }

  const handleBtnClear = () => {
    window.location.reload();
  }
  return (
    <>
      <h1 className='title-home'>Sistema de atualização de preços</h1>
      <Forms />
      <div>
      <button
      className='btnUpdate'
      onClick={handleBtnUpdate}
      type='button'>Atualizar
      </button>
      {showProducts && <Products />}
      <button className='btnclear' onClick={handleBtnClear}>
        Limpar dados
        </button>
      </div>
    </>
  );
}