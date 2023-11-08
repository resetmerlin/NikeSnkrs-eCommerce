import { IOrder } from '../../../types/dto';
import { AtomicSubtitle, AtomicTitle } from '../../atoms';
import {
  OnApproveBraintreeActions,
  OnApproveBraintreeData,
  PayPalButtons,
  PayPalScriptProvider,
} from '@paypal/react-paypal-js';
import './OrderInfo.scss';

type IProps = {
  order: IOrder;
  clientId: string;
  checkPaid: (
    _data: OnApproveBraintreeData,
    actions: OnApproveBraintreeActions
  ) => void;
  currentDate: string;
  paypalPaid: boolean;
};

export default function OrderInfo({
  order,
  clientId,
  checkPaid,
  currentDate,
  paypalPaid,
}: IProps) {
  return (
    <div className="orderInfo">
      <AtomicTitle size="s"> Order Information</AtomicTitle>
      <div className="orderInfo__row">
        <AtomicTitle size="xs"> User Information</AtomicTitle>
        <div>
          <AtomicSubtitle size="l" strength="600">
            Email
          </AtomicSubtitle>
          <AtomicSubtitle size="l">{order?.email}</AtomicSubtitle>
        </div>
        <div>
          <AtomicSubtitle size="l" strength="600">
            Name
          </AtomicSubtitle>
          <AtomicSubtitle size="l">{order?.name}</AtomicSubtitle>
        </div>
        <div>
          <AtomicSubtitle size="l" strength="600">
            Order Id
          </AtomicSubtitle>
          <AtomicSubtitle size="l">{order?._id}</AtomicSubtitle>
        </div>
      </div>
      <div className="orderInfo__row">
        <AtomicTitle size="xs"> User Address</AtomicTitle>
        <div>
          <AtomicSubtitle size="l" strength="600">
            Address
          </AtomicSubtitle>
          <AtomicSubtitle size="l">
            {order?.shippingAddress?.address}
          </AtomicSubtitle>
        </div>
      </div>

      <div className="orderInfo__row">
        <AtomicTitle size="xs">Payment method</AtomicTitle>
        <div>
          <AtomicSubtitle size="l" strength="600">
            Payment method
          </AtomicSubtitle>
          <AtomicSubtitle size="l">paypal</AtomicSubtitle>
        </div>
      </div>

      <div className="orderInfo__row">
        <AtomicTitle size="xs">Summary</AtomicTitle>
        <div>
          <span>{order?.shippingAddress?.address}</span>
          <span>{currentDate}</span>
        </div>
        <div>
          <AtomicSubtitle size="l" strength="600">
            Total Price
          </AtomicSubtitle>
          <AtomicSubtitle size="l">${order?.totalPrice}</AtomicSubtitle>
        </div>
      </div>

      <div className="orderInfo__row">
        <AtomicTitle size="xs">Checkout</AtomicTitle>
        <div>
          <AtomicSubtitle size="l" strength="600">
            Paid
          </AtomicSubtitle>
          <AtomicSubtitle size="l">
            {!order?.isPaid && 'Not Paid'}
          </AtomicSubtitle>
        </div>
      </div>
      {clientId && !paypalPaid && (
        <PayPalScriptProvider
          options={{
            clientId: `${clientId}`,
            components: 'buttons',
            currency: 'USD',
          }}
        >
          <PayPalButtons
            createOrder={(_, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: order.totalPrice.toString(), // Set the price here
                    },
                    payee: {
                      merchant_id: order?._id,
                      email_address: order?.email,
                    },
                  },
                ],
              });
            }}
            paymentCheck={checkPaid}
          />
        </PayPalScriptProvider>
      )}
    </div>
  );
}
