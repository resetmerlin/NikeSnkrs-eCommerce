import { useEffect } from 'react';
import { userInfoAdded } from '../features/user/userReducers';
import { AppDispatch } from '../store';
import { ICarts, IUser } from '../types/dto';
import { cartAdded } from '../features/cart/cartReducers';

/**  Put into userInfo if no user in state but in localStorage, */
export function localUserToState(userInfo: IUser[], dispatch: AppDispatch) {
  useEffect(() => {
    if (userInfo.length == 0 && localStorage.getItem('userInfo')) {
      const user = localStorage.getItem('userInfo');

      if (user) {
        const parsedItems = JSON.parse(user);
        console.log(parsedItems);
        if (parsedItems[0]) {
          dispatch(userInfoAdded(parsedItems[0]));
        }
      }
    }
  }, [userInfo]);
}

/**  Put into cart if no cart product in state but in localStorage, */
export function localCartToState(cartProducts: ICarts, dispatch: AppDispatch) {
  useEffect(() => {
    if (cartProducts.length == 0 && localStorage.getItem('cartItems')) {
      const cartItems = localStorage.getItem('cartItems');

      if (cartItems) {
        const parsedItems = JSON.parse(cartItems);
        if (parsedItems[0]) {
          dispatch(cartAdded(parsedItems[0]));
        }
      }
    }
  }, [cartProducts]);
}
