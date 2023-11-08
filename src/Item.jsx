import React, { useContext } from 'react';
import { CartContext } from './Context/Cart';

const Item = (props) => {
    const cart = useContext(CartContext)
    return (
        <div className='item-card'>
            <h3>{props.name}</h3>
            <p>Price: ${props.price}</p>
            <button onClick={() => cart.setItems([...cart.items, { name: props.name, price: props.price }])}>Add To Cart</button>
        </div>
    );
}

export default Item;
