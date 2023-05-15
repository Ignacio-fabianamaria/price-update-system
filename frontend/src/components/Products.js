import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/products.css'


export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const api = axios.create({ baseURL: 'http://localhost:4001' });
    console.log(products + 'oi');
    try {
      const { data } = await api.get('/products');
      console.log(products + 'oi');
      setProducts(data.message)
      console.log(products);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <tbody className='products-table'>
        <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Preço de custo</th>
          <th>Preço de venda</th>
          <th>Quantidade pack</th>
          <th>Preço do pack</th>
        </tr>
        </thead>
        {products.map(product => (
          <tr key={product.code}>
            <td> {product.code}</td>
            <td> {product.name}</td>
            <td> {product.costPrice}</td>
            <td> {product.salesPrice}</td>
            <td>{product.packQuantity == null ? '-' : product.packQuantity}</td>
            <td>{product.totalSalesPrice  == null ? '-' : product.totalSalesPrice}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}