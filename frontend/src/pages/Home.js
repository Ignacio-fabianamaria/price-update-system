import React from 'react';
import Forms from '../components/Forms';
import Products from '../components/Products';
import '../styles/home.css'

export default function Home() {
  return (
    <>
      <h1 className='title-home'>Sistema de atualização de preços</h1>
      <Forms />
      <Products />
    </>
  );
}