import React from 'react';
import clock from './images/clock.png';
import close from './images/cancel.png';

function Checkout(props) {
    return (props.trigger) ? (
        <div className="checkout-page">
            <div className="checkout">
                <div className="checkout__close">
                    <a href="#/" className="close_btn" onClick={()=>{props.setTrigger(false)}}>
                        <img src={close} alt="close"></img>
                    </a>
                </div>
                <img src={clock} alt="" className="checkout__image"></img>
                <div className="checkout__text">
                    <h2>ORDER PLACED</h2>
                    <p>Your order will be ready in 10 minutes. Please procede to one of our locations to pick up your order. </p>
                </div>
            </div>
        </div>
    ) : "";
}

export default Checkout
