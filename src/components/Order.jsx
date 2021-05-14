import React, {useState} from 'react'

//Componenet Imports
import Dropdown from "./Dropdown";
import coffeeTypes from "./coffeeTypes.json";

//Image Imports
// import cupIcon from './images/coffee-cup.png';
import coffeeMachine from './images/coffee-machine.png';
import shoppingCart from './images/cart.png';
import hotCoffee from './images/hot-coffee.png';

function Order() {

    const [size, setSize] = useState(null);
    console.log(size);
    // const [selected, setSelected] = useState(false);

    const [dropdownValue, setDropdownValue] = useState(null)

    const [countMilk, setCountMilk] = useState(0);
    const [countSugar, setCountSugar] = useState(0);
    const [countCream, setCountCream] = useState(0);

    const [cart, setCart] = useState([]);
    const [clicked, setClicked] = useState(false);
    console.log(clicked);

    // const [shake, setShake] = useState(false);

    const addToCart = (e) =>{
        if(size == null || dropdownValue == null){
            // setShake(true);
        }
        else{
            const newClicked = true;
            setClicked(newClicked);
            if(newClicked){
                setCart(()=>cart.concat({"size":size, "type":dropdownValue.type, "milk":countMilk, "sugar":countSugar, "cream":countCream}));
            }
            setCountMilk(0)
            setCountSugar(0)
            setCountCream(0)
            setDropdownValue(null)
            setSize(null)
            // console.log(cart);
            
            // setCart([{"size":size, "type":dropdownValue.type, "milk":countMilk, "sugar":countSugar, "cream":countCream}]);
            // setCart({})
            // setCart({"size":size, "type":dropdownValue.type, "milk":countMilk, "sugar":countSugar, "cream":countCream});
            console.log(cart);
        }
        
    }

    return (
        <section className="order flex flex-jc-c">
            <div className="order__text container-pl">
                <h1>Order A Delicious Brew Of Coffee</h1>   
                <p>At Jason & Aren's Coffee Co. we are commited to brewing the best coffee possible. Order you're cup-of coffee and pick it     up at one of our locations.</p>
            </div>
            <div className="order__coffee container-pr flex">
                <div className="order__selection">
                    <div className="order__title">
                        <img src={coffeeMachine} className={size == null || dropdownValue == null ? "shake" : null} alt="machine"></img>
                        <h1>Create A Order</h1>
                    </div>
                    <div className="order__create">
                        <div className="order__size">
                            <h2>Size Options</h2>
                            <div className="cup_options flex">
                                <div className={`cup_option ${size==='small' ? "selected" : null}`} onClick={()=>{setSize('small');}}>
                                    {/* <img src={cupIcon} id="small" alt="cup"></img> */}
                                    <h3>Small</h3>
                                    <p>354ml</p>
                                </div>
                                <div className={`cup_option ${size==='medium' ? "selected" : null}`} onClick={()=>setSize('medium')}>
                                    {/* <img src={cupIcon} id="medium" alt="cup"></img> */}
                                    <h3>Medium</h3>
                                    <p>473ml</p>
                                </div>
                                <div className={`cup_option ${size==='large' ? "selected" : null}`} onClick={()=>setSize('large')}>
                                    {/* <img src={cupIcon} id="large" alt="cup"></img> */}
                                    <h3>Large</h3>
                                    <p>709ml</p>
                                </div>
                            </div>
                        </div>
                        <div className="order__type">
                            <h2>Type of Coffee</h2>
                            <div className="coffee-dropdown">
                                <Dropdown coffeeTypes={coffeeTypes} value={dropdownValue} onChange={val => setDropdownValue(val)}></Dropdown>
                            </div>
                        </div>
                        <div className="order__milk">
                            <h2>Milk Option</h2>
                            <div className="selection flex flex-ai-c flex-jc-sb">
                                <a href="#/" className="button decButton" onClick={()=>{if(countMilk > 0) setCountMilk(countMilk-1)}}>-</a>
                                <h3>{countMilk}</h3>
                                <a href="#/" className="button incButton" onClick={()=>setCountMilk(countMilk+1)}>+</a>
                            </div>
                        </div>
                        <div className="order__cream">
                            <h2>Cream Option</h2>
                            <div className="selection flex flex-ai-c flex-jc-sb">
                                <a href="#/" className="button decButton" onClick={()=>{if(countCream > 0) setCountCream(countCream-1)}}>-</a>
                                <h3>{countCream}</h3>
                                <a href="#/" className="button incButton" onClick={()=>setCountCream(countCream+1)}>+</a>
                            </div>
                        </div>
                        <div className="order__sugar">
                            <h2>Sugar Option</h2>
                            <div className="selection flex flex-ai-c flex-jc-sb">
                                <a href="#/" className="button decButton" onClick={()=>{if(countSugar > 0) setCountSugar(countSugar-1)}}>-</a>
                                <h3>{countSugar}</h3>
                                <a href="#/" className="button incButton" onClick={()=>setCountSugar(countSugar+1)}>+</a>
                            </div>
                        </div>
                        <div className="order__btn" onClick={()=>addToCart()}>
                            <a href="#/">Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div className="cart">
                    <div className="order__selection">
                        <div className="order__title">
                            <img src={shoppingCart} alt="machine"></img>
                            <h1>Coffee Cart</h1>
                        </div>
                        {cart.map((item)=>{
                            const {size, type, milk, sugar, cream} = item;
                            return (
                            <div className="cart__item flex">   
                                <img src={hotCoffee} alt="coffee"></img> 
                                <div className="item-info">
                                    <h3>{size} {type} Coffee</h3>
                                    <div className="add-on">
                                        <p>{milk} 2% Milks</p>
                                        <p>{cream} Creams</p>
                                        <p>{sugar} Sugars</p>
                                    </div>
                                    
                                </div>
                                {/* <h3>{size} {type} Coffee With {milk!==0 ? milk : null} milks</h3>
                                <h4>{type}</h4>
                                <h4>{milk} Milks</h4>
                                <h4>{sugar} Sugars</h4>
                                <h4>{cream} Creams</h4> */}
                            </div>
                            );
                            

                        })}
                        

                    </div>
                
                </div>
            </div>
            
        </section>
    )
}

export default Order
