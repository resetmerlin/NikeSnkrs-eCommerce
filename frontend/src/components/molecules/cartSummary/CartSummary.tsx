import { AtomicButton, AtomicSubtitle } from '../../atoms';
import './CartSummary.scss';

type IProps = {
  currentDate: string;
  qty: number;
  productPrice: string;
  shippingPrice: number;
  totalPrice: number;
  taxPrice: number;
  paymentMethod: string;
};

export default function CartSummary(props: IProps) {
  return (
    <div className="orderSummary">
      <div>
        <AtomicSubtitle size="s" color="secondary">
          {props?.currentDate}
        </AtomicSubtitle>
      </div>
      <div>
        <AtomicSubtitle size="l">Order Summary</AtomicSubtitle>
      </div>
      <div className="orderSummary__border">
        <AtomicSubtitle size="m" color="secondary">
          SUBTOTAL
        </AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          ({props?.qty})items
        </AtomicSubtitle>
      </div>
      <div className="orderSummary__border">
        <AtomicSubtitle size="l">Total Item props</AtomicSubtitle>
        <AtomicSubtitle size="l">$ {props?.productPrice}</AtomicSubtitle>
      </div>

      <div>
        <AtomicSubtitle size="m" color="secondary">
          SHIPPING
        </AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          ${props?.shippingPrice}
        </AtomicSubtitle>
      </div>

      <div className="orderSummary__border">
        <AtomicSubtitle size="m" color="secondary">
          TAX
        </AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          ${props?.taxPrice}
        </AtomicSubtitle>
      </div>

      <div className="orderSummary__border">
        <AtomicSubtitle size="l">Total</AtomicSubtitle>
        <AtomicSubtitle size="l">$ {props?.totalPrice}</AtomicSubtitle>
      </div>

      <div>
        <AtomicSubtitle size="m" color="secondary">
          Payment method
        </AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          {props?.paymentMethod}
        </AtomicSubtitle>
      </div>
      <AtomicButton size="m" type="button" onClick={props?.addToOrderHandler}>
        Proceed to Checkout
      </AtomicButton>
    </div>
  );
}
