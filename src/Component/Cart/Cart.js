import React from 'react';
import CartCss from './Cart.css';
import Course from '../Course/Course.js'

const Cart = () => {
    return (
        <div className="payCart">
            <h1>Payable Amount: {Course.purchaseClicked}</h1>
        </div>
    );
};

export default Cart;