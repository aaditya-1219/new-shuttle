import React from 'react';
import Wrapper from './styles';
import Product from '../Product/';
import "../Product/Card.css"

const GridView = ({ products }) => {
  return (
      <Wrapper>
        <div className='card--container'>
          {products.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </Wrapper>
  );
};

export default GridView;
