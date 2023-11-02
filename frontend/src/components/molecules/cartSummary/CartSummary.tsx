import { AtomicButton, AtomicSubtitle } from '../../atoms';
import './CartSummary.scss';

export default function CartSummary(prices) {
  return (
    <div className="orderSummary">
      <div>
        <AtomicSubtitle size="s" color="secondary">
          {prices?.currentDate}
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
          ({prices?.cartProducts?.length})items
        </AtomicSubtitle>
      </div>
      <div className="orderSummary__border">
        <AtomicSubtitle size="l">Total Item Prices</AtomicSubtitle>
        <AtomicSubtitle size="l">$ {prices?.productPrice}</AtomicSubtitle>
      </div>

      <div>
        <AtomicSubtitle size="m" color="secondary">
          SHIPPING
        </AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          ${prices?.shippingPrice}
        </AtomicSubtitle>
      </div>

      <div className="orderSummary__border">
        <AtomicSubtitle size="m" color="secondary">
          TAX
        </AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          ${prices?.taxPrice}
        </AtomicSubtitle>
      </div>

      <div className="orderSummary__border">
        <AtomicSubtitle size="l">Total</AtomicSubtitle>
        <AtomicSubtitle size="l">$ {prices?.totalPrice}</AtomicSubtitle>
      </div>

      <div>
        <AtomicSubtitle size="m" color="secondary">
          Payment method
        </AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          {prices?.paymentMethod}
        </AtomicSubtitle>
      </div>
      <AtomicButton size="m">Proceed to Checkout</AtomicButton>
    </div>
  );
}
