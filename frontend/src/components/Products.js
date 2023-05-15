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
        <tr>
          <td>Código</td>
          <td>Nome</td>
          <td>Preço de custo</td>
          <td>Preço de venda</td>
          <td>Quantidade pack</td>
          <td>Preço do pack</td>
        </tr>
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