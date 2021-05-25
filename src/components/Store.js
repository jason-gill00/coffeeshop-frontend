import {useState} from 'react';

// export const Context = React.createContext();


const Store = () => {
    const [cart, setCart] = useState([]);

    // const actions = (action) => {
    //     const {type, payload} = action;
    //     switch(type){
    //         case 'setCart':
    //             return setCart(payload);
    //         default:
    //             return cart;
    //     }

    // }
    
    return {cart, setCart};

    // return (
    //     <Context.Provider value={[cart, setCart]}>{childern}</Context.Provider>
    // )
};

export default Store;