import React from 'react';
import "./Card.css"
import Wrapper from './styles';
import { formatPrice } from '../../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ image, name, price, id }) => {
  return (
    <Link to={`/products/${id}`} className='link'>
      <div className="card--item">
        <img src={image} alt="image" />
        <FaSearch />
        <span className="card--shuttle">Shuttle</span>
        <div className="card--desc">{name}</div>
        <div className="card--price">${price}</div>
      </div >
    </Link>
    // <Wrapper>
    //   <div className='container'>
    //     <img src={image} alt='main' />
    //     <Link to={`/products/${id}`} className='link'>
    //       <FaSearch />
    //     </Link>
    //   </div>
    //   <footer>
    //     <h5>{name}</h5>
    //     <p>{formatPrice(price)}</p>
    //   </footer>
    // </Wrapper>
  );
};

{/* <Link to="/products/${id}" className='link'>
			<div className="card--item">
				<img src={image} alt="image" />
				<span className="card--shuttle">Shuttle</span>
				<div className="card--desc">{name}</div>
				<div className="card--price">${price}</div>
				{/* <div className="card--rating">{stars}</div> */}
// 	</div >
// </Link > * /}

export default Product;
