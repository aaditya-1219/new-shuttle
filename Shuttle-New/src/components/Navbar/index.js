import React from 'react';
import NavContainer from './styles';
import logo from '../../assets/logo.svg';
import shuttle from "../../assets/shuttle.jpg"
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../../utils/constants';
import CartButtons from '../CartButtons/';
import { useProductsContext } from '../../context/products_context';
import { useUserContext } from '../../context/user_context';

const Nav = () => {
  const { currentUser } = useUserContext();
  const { openSidebar } = useProductsContext();

  function openMenu() {
    document.querySelector('.nav-links').classList.toggle('nav-resp')
  }

  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={shuttle} alt='' />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
          <div className='burger' onClick={openMenu}>
            <div className='burger-line'></div>
            <div className='burger-line'></div>
            <div className='burger-line'></div>
          </div>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { url, text, id } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {currentUser && (
            <li>
              <Link to='/checkout'>Checkout</Link>
            </li>
          )}
          {currentUser && (
            <li>
              <Link to='/orders'>Orders</Link>
            </li>
          )}
        </ul>
      </div>
      <div className='cartbtns-resp'>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

export default Nav;
