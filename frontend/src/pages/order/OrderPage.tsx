import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  OnApproveBraintreeActions,
  OnApproveBraintreeData,
} from '@paypal/react-paypal-js';

import { ChildTemplate, OrderInfo, ParentTemplate } from '../../components';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { logOut, useAppDispatch, useAppSelector } from '../../hooks';
import { selectOrder, selectUser } from '../../features';
import { IOrder } from '../../types';

export default function OrderPage() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const order: IOrder = useAppSelector(selectOrder);
  const { id: orderId } = useParams();

  const [clientId, setClientId] = useState('');
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

  const logOutHandler = () => {
    logOut(dispatch);
  };

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

  const date = new Date();

  const dateHandler = new Intl.DateTimeFormat('en-kr', {
    dateStyle: 'full',
  });

  const currentDate = dateHandler.format(date);

  return (
    <LayoutHeader userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size="s">
        <ChildTemplate position="center" size="full">
          <OrderInfo
            paypalPaid={paypalPaid}
            order={order}
            checkPaid={checkPaid}
            clientId={clientId}
            currentDate={currentDate}
          />
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}
