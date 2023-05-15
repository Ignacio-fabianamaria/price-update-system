import React from 'react';


export default function ResponseUpdatePrice({data}) {
const items =data[0];
  return (
    <>
      <h3>Atualizações nos preços dos produtos</h3>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço Atual</th>
            <th>Novo Preço</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.message.codigo}</td>
              <td>{item.message.nome}</td>
              <td>{item.message.precoAtual}</td>
              <td>{item.message.novoPreco}</td>
              <td>{item.message.novoPreco ? 'Atualizado' : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}