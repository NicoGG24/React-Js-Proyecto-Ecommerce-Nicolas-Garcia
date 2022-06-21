import React from 'react';
import logo from '../assets/ecommercelogo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './NavBar.css'


const NavBar = () => {
    return(
        <header>
            <nav>
                <a href="" className='ecommerceH1'>Ecommerce</a>  
                <li>
                    <a href="">Shoes</a>
                    <span>/</span>
                    <a href="">Clothing</a>
                    <span>/</span>
                    <a href="">Accessories</a>
                </li>
                
            </nav>
            <a href="" className='carrito'><ShoppingCartIcon style={{ color: 'black' }} /></a>
        </header>
    )
    
}


export default NavBar;