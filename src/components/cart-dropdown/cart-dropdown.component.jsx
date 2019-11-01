import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

class CartDropdown extends React.Component {
    render() {
        return (
            <div className='cart-dropdown'>
                <div className='cart-items'>
                    <CustomButton>GO TO CHECKOUT</CustomButton>
                </div>
            </div>
        );
    }
}

export default CartDropdown;