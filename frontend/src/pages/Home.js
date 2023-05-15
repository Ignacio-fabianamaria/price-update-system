import React, { useState } from 'react';
import Forms from '../components/Forms';
import Products from '../components/Products';
import '../styles/home.css'

export default function Home() {
  const [showProducts, setShowProducts] = useState(false);
  const handleBtnUpdate = () => {
    setShowProducts(true)
  }
  return (
    <>
      <h1 className='title-home'>Sistema de atualização de preços</h1>
      <Forms />
      
      <button
      className='btnUpdate'
      onClick={handleBtnUpdate}
      type='button'>Atualizar
      </button>
      {showProducts && <Products />}
      
    </>
  );
}