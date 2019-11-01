import CartActionTypes from './cart.types';

export const toogleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item // payload in our case is the item we're trying to add into our cart items array
});