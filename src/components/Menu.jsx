import React, {useState, useContext} from 'react'
import Context from './Context';
import AddToCartPopup from './AddToCartPopup';

// import items 


import items from "./menuItems.json";
// import CreateAccountPopup from './CreateAccountPopup';
// import img1 from "./images/menu_img1.jpg";
// import { unstable_renderSubtreeIntoContainer } from 'react-dom'

function Menu() {

    const [cart, setCart] = useContext(Context)

    const [cartPopup, setCartPopup] = useState(false);
            // setCart(()=>cart.concat({"size":size, "type":dropdownValue.type, "num_milk":countMilk, "num_sugar":countSugar, "num_cream":countCream}));


    return (
        <section id="menu__section" className="wrapper container">

            {items.map((item) => {
                return (
                     <div className="card" onClick={() => {
                         setCart(()=>cart.concat({"size":"medium", "type":item.title, "num_milk":0, "num_sugar":0, "num_cream":0}));
                         setCartPopup(true);
                        
                        }
                         
                         }>
                        <div className="card-image"></div>
                        <div className="card-text">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                        <div className="card-stats">
                            <div className="stat">
                                <a href="#/">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                );
            })}
            {/* <div className="card" onClick={() => setCart(()=>cart.concat({"size":"medium", "type":"Brown Sugar Americano", "num_milk":0, "num_sugar":0, "num_cream":0}))}>
                <div className="card-image"></div>
                <div className="card-text">
                    <h2>Brown Sugar Americano</h2>
                    <p>Brown-sugar syrup and water topped with a steamed oat beverage and dashes of cinnamon</p>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <a href="#/">Add to Cart</a>
                    </div>
                </div>
            </div>
            <div className="card" onClick={() => setCart(()=>cart.concat({"size":"medium", "type":items[1].title, "num_milk":0, "num_sugar":0, "num_cream":0}))}>
                <div className="card-image"></div>
                <div className="card-text">
                    <h2>{items[1].title}</h2>
                    <p>{items[1].description}</p>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <a href="#/">Add to Cart</a>
                    </div>
                </div>
            </div>
            <div className="card" onClick={() => setCart(()=>cart.concat({"size":"medium", "type":items[2].title, "num_milk":0, "num_sugar":0, "num_cream":0}))}>
                <div className="card-image"></div>
                <div className="card-text">
                    <h2>{items[2].title}</h2>
                    <p>{items[2].description}</p>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <a href="#/">Add to Cart</a>
                    </div>
                </div>
            </div>
            <div className="card" onClick={() => setCart(()=>cart.concat({"size":"medium", "type":items[3].title, "num_milk":0, "num_sugar":0, "num_cream":0}))}>
                <div className="card-image"></div>
                <div className="card-text">
                    <h2>{items[3].title}</h2>
                    <p>{items[3].description}</p>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <a href="#/">Add to Cart</a>
                    </div>
                </div>
            </div> */}

            <AddToCartPopup trigger={cartPopup} setTrigger={setCartPopup}></AddToCartPopup>

        </section>
    )
}

export default Menu
