import React from 'react'
import shoppingCart from './images/cart.png';


function AddToCartPopup(props) {

    // const [timedPopup, setTimedPopup] = useState(false);

    setTimeout(() => {
        props.setTrigger(false)
    }, 300)

    return props.trigger ? (
        <div className="cart__popup-container">
            <div className="cart__popup">
                <img src={shoppingCart} alt=""></img>
                <h3>Added To Cart</h3>
            </div>
        </div>
    ) : "";
}

export default AddToCartPopup
