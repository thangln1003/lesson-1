import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toogleCartHidden, itemCount }) => {

    return (
        <div className='cart-icon' onClick={toogleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => {
    return {
        itemCount: selectCartItemsCount(state)
    }
};

// const mapStateToProps = ({ cart: { cartItems } }) => {
//     console.log('I am being called');
//     return {
//         itemCount: cartItems.reduce((
//             (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity
//         ), 0)
//     }
// };

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);