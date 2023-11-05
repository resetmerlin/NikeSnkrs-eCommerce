import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logOut } from '../../hooks';
import { selectUser } from '../../features/user/userInfoSlice';
import { Cart, OrderInfo } from '../../components/organisms';
import { IOrder } from '../../types/dto';
import { selectOrder } from '../../features/order/orderSlice';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function OrderPage() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const order: IOrder = useAppSelector(selectOrder);
  const { id: orderId } = useParams();

  const [clientId, setClientId] = useState(null);
  const [paypalPaid, setPaypalPaid] = useState(false);

  const checkPaypal = (paid) => {
    if (paid) {
      setPaypalPaid(true);
    }
  };
  const logOutHandler = () => {
    logOut(dispatch);
  };

  useEffect(() => {
    const addPayPalScript = async () => {
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
    if (paypalPaid == false) {
      addPayPalScript();
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
            checkPaypal={checkPaypal}
            clientId={clientId}
            date={date}
            currentDate={currentDate}
          />
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}
