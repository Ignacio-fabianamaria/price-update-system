import React from 'react';
import '../styles/responseUpdatePrice.css'


export default function ResponseUpdatePrice({data}) {
const items =data[0];
  return (
    <>
      <table className='response-table'>
        <caption>Status da atualização de preços:</caption>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço Atual</th>
            <th>Novo Preço</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            if (item.type === 'error') {
              return (
                <tr key={index}>
                  <td colSpan="5" style={{color: 'red'}}>{item.message}</td>
                </tr>
              );
            }
            return (
              <tr key={index}>
                <td>{item.message.codigo}</td>
                <td>{item.message.nome}</td>
                <td>{item.message.precoAtual}</td>
                <td>{item.message.novoPreco}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}