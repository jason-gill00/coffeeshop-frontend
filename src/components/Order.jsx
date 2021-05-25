import React, {useState, useContext} from 'react';

//Componenet Imports
import Dropdown from "./Dropdown";
import coffeeTypes from "./coffeeTypes.json";
import Checkout from "./Checkout";
import Context from './Context';
// import OrderHistory from './OrderHistory';

//Image Imports
// import cupIcon from './images/coffee-cup.png';
import coffeeMachine from './images/coffee-machine.png';
import shoppingCart from './images/cart.png';
import hotCoffee from './images/hot-coffee.png';

function Order() {

    const [size, setSize] = useState(null);
    // console.log(size);
    // const [selected, setSelected] = useState(false);

    const [dropdownValue, setDropdownValue] = useState(null)

    const [countMilk, setCountMilk] = useState(0);
    const [countSugar, setCountSugar] = useState(0);
    const [countCream, setCountCream] = useState(0);

    // const [cart, setCart] = useState([]);

    // const [cart, setCart] = useState([]);

    const [cart, setCart] = useContext(Context);

    // const {cart, setCart} = useContext(Context);

    const [checkoutPopup, setCheckoutPopup] = useState(false);
    // const [history, setHistory] = useState(false);
    // const [historyData, setHistoryData] = useState([]);
    // const [clicked, setClicked] = useState(false);

    // const [shake, setShake] = useState(false);

    const orderCheckout = async() => {
        console.log(cart);
        const url = "http://localhost:5000/api/order/submit";
        const token = localStorage.getItem('auth-token');

        const result = await fetch(url, {
            method: 'POST',
            headers : {
                'auth-token': `${token}`,
                'Content-type': 'application/json'
            },
            body : JSON.stringify(cart)
        });
        console.log(result);

        setCart([]);
    }

    // const data;

    // const viewHistory = async() =>{
    //     const url = "http://localhost:5000/api/order/history";
    //     const token = localStorage.getItem('auth-token');

    //     const result = await fetch(url, {
    //         method: 'GET',
    //         headers : {
    //             'auth-token': `${token}`,
    //             'Content-type': 'application/json'
    //         }
    //     });
    //     const data = await result.json();
    //     setHistoryData(data)
    //     // console.log(data);
    //     // const date = (data.history[0].order_date).split('T');
    //     // console.log(date[0]);

    // }


    const addToCart = async(e) =>{


        if(size == null || dropdownValue == null){
            // setShake(true);
            setCart([])
        }
        else{
            // actions({type:'setCart', payload:{cart.concat({"size":size, "type":dropdownValue.type, "num_milk":countMilk, "num_sugar":countSugar, "num_cream":countCream})}})
            // console.log(cart);
            setCart(()=>cart.concat({"size":size, "type":dropdownValue.type, "num_milk":countMilk, "num_sugar":countSugar, "num_cream":countCream}));

            setCountMilk(0)
            setCountSugar(0)
            setCountCream(0)
            setDropdownValue(null)
            setSize(null)
           
        }
        
    }

    return (
        <section id="order__section" className="order container flex flex-jc-c">
            <div className="order__text">
                <div className="order__text-container">
                    <h1>Order A Delicious Brew Of Coffee</h1>   
                    <p>At Jason & Aren's Coffee Co. we are commited to brewing the best coffee possible. Order you're cup-of coffee and pick it     up at one of our locations.</p>
                    {/* <a href="#/" onClick={()=>{viewHistory();setHistory(true)}}>View History</a> */}
                </div>
            </div>
            <div className="order__coffee flex">
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
                        <div className="order__title cart-title">
                            <img src={shoppingCart} alt="machine"></img>
                            <h1>Coffee Cart</h1>
                        </div>
                        <div className="order__cart-items">
                            {cart.map((item)=>{
                                let count = 0;
                                const {size, type, num_milk, num_sugar, num_cream} = item;
                                return (
                                <div key={count+1} className="cart__item flex">   
                                    <img src={hotCoffee} alt="coffee"></img> 
                                    <div className="item-info">
                                        <h3>{size} {type} Coffee</h3>
                                        <div className="add-on">
                                            {((type !== "Decafe") && (type !== "Original Blend") && (type !== "Latte") && (type !== "Cappuccino")) ? <p>Specialty Menu</p> : null}
                                            {((num_milk===0 && (num_cream===0) && (num_sugar===0)) && ((type === "Decafe") || (type === "Original Blend") || (type === "Latte") || (type === "Cappuccino")) ? <p> Black</p> : null)}
                                            {!(num_milk===0) ? <p>{num_milk} 2% Milks</p> : null}
                                            {!(num_cream===0) ? <p>{num_cream} Creams</p> : null}
                                            {!(num_sugar===0) ? <p>{num_sugar} Sugars</p> : null}
                                            {/* <p>{num_milk} 2% Milks</p>
                                            <p>{num_cream} Creams</p>
                                            <p>{num_sugar} Sugars</p> */}
                                        </div>
                                        
                                    </div>
                                    {/* <h3>{size} {type} Coffee With {milk!==0 ? milk : null} milks</h3>
                                    <h4>{type}</h4>
                                    <h4>{milk} Milks</h4>
                                    <h4>{sugar} Sugars</h4>
                                    <h4>{cream} Creams</h4> orderCheckout();*/}
                                </div>
                                );
                            })}
                        
                            <div className="order__btn" onClick={()=>{if(cart.length !== 0){orderCheckout(); setCheckoutPopup(true);}}}>
                                <a href="#/">Checkout</a>
                            </div>
                        </div>
                        

                    </div>
                
                </div>
            </div>
            <Checkout trigger={checkoutPopup} setTrigger={setCheckoutPopup}></Checkout>
            {/* <OrderHistory trigger={history} setTrigger={setHistory} history_data={historyData}></OrderHistory> */}
        </section>
    )
}

export default Order
