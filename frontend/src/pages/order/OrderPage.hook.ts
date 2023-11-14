import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  OnApproveBraintreeActions,
  OnApproveBraintreeData,
} from '@paypal/react-paypal-js';
import { selectOrder, selectUser } from '../../features';
import { logOut, useAppDispatch, useAppSelector } from '../../hooks';
import { IOrder, IUser } from '../../types';

export const useOrderPage = (): [
  userInfo: IUser,
  logOutHandler: () => void,
  paypalPaid: boolean,
  order: IOrder,
  checkPaid: (
    _data: OnApproveBraintreeData,
    actions: OnApproveBraintreeActions
  ) => void,
  clientId: string,
  date: Date,
  dateHandler: Intl.DateTimeFormat,
] => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const order: IOrder = useAppSelector(selectOrder);
  const [paypalPaid, setPaypalPaid] = useState(false);

  // Check user paid
  const checkPaid = async (
    _data: OnApproveBraintreeData,
    actions: OnApproveBraintreeActions
  ) => {
    if (actions && actions.order) {
      const details = await actions.order.capture();
      console.log('Order successfully captured:', details);

      setPaypalPaid(true);
    }
  };

  const logOutHandler = useCallback(() => {
    logOut(dispatch);
  }, [dispatch, logOut]);

  const [clientId] = useFetchPaypalId(order, paypalPaid);

  const date = new Date();

  const dateHandler = new Intl.DateTimeFormat('en-kr', {
    dateStyle: 'full',
  });

  return [
    userInfo,
    logOutHandler,
    paypalPaid,
    order,
    checkPaid,
    clientId,
    date,
    dateHandler,
  ];
};

/** Fetch Paypal ClientId hook */
const useFetchPaypalId = (order: IOrder, paypalPaid: boolean) => {
  const [clientId, setClientId] = useState('');
  const { id: orderId } = useParams();

  // Fetch Paypal Client ID and store into State
  useEffect(() => {
    const getClientId = async () => {
      try {
        const response = await fetch(`/api/config/paypal`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const clientId = await response.text();

        setClientId(clientId);
      } catch (error) {
        console.error('Error fetching PayPal client ID:', error);
      }
    };
    if (order?._id == orderId) {
      if (paypalPaid == false) getClientId();
    }
  }, [order, orderId, paypalPaid]);

  return [clientId];
};
