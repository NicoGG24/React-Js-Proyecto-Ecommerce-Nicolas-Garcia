import React from "react";
import NavBar from './NavBar';
import CartWidget from './CartWidget';
import './Header.css';

const Header = () => {
    return(
        <header>
            <a href="" className='ecommerceH1'>Ecommerce</a>  
            <NavBar />
            <CartWidget />
        </header>
    );   
}


export default Header;