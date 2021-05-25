import React from 'react';
import mainLogo from './images/coffee.png';
import userIcon from './images/user.png';
// import shoppingIcon from './images/shopping-cart.png';

function Header() {
    return (
        <header className="header">
            <nav className="flex flex-jc-sb container container-pall flex-ai-c">
                <a href="#/" className="header__logo flex flex-ai-c">
                    <img src={mainLogo} alt="coffee"></img>
                    <div>Coffee Shop</div>
                </a>
                <div className="header__links">
                    <a href="#/">Home</a>
                    <a href="#menu__section">Menu</a>
                    <a href="#order__section">Order</a>
                </div>
                <a href="#/" className="header__icon">
                    {/* <img src={shoppingIcon} alt="cart"></img> */}
                    <img src={userIcon} alt="user"></img>
                </a>

            </nav>
        </header>
    )
}

export default Header
