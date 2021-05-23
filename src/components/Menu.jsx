import React from 'react'
import items from "./menuItems.json";
// import img1 from "./images/menu_img1.jpg";
// import { unstable_renderSubtreeIntoContainer } from 'react-dom'

function Menu() {



    return (
        <div className="wrapper container">
            <div className="card">
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
            <div className="card">
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
            <div className="card">
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
            <div className="card">
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
            </div>

            
        </div>
    )
}

export default Menu
