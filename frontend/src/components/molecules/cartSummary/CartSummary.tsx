import { AtomicButton, AtomicSubtitle } from '../../atoms';
import './CartSummary.scss';

export default function CartSummary() {
  return (
    <div className="orderSummary">
      <div>
        <AtomicSubtitle size="s" color="secondary">
          Date Sunday October 29 2023
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
          (1)items
        </AtomicSubtitle>
      </div>
      <div className="orderSummary__border">
        <AtomicSubtitle size="l">Total Item Prices</AtomicSubtitle>
        <AtomicSubtitle size="l">$175.0</AtomicSubtitle>
      </div>

      <div>
        <AtomicSubtitle size="m" color="secondary">
          SHIPPING
        </AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          $3
        </AtomicSubtitle>
      </div>

      <div className="orderSummary__border">
        <AtomicSubtitle size="m" color="secondary">
          TAX
        </AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          $5
        </AtomicSubtitle>
      </div>

      <div className="orderSummary__border">
        <AtomicSubtitle size="l">Total</AtomicSubtitle>
        <AtomicSubtitle size="l">$167.0</AtomicSubtitle>
      </div>

      <div>
        <AtomicSubtitle size="m" color="secondary">
          Payment method
        </AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          paypal
        </AtomicSubtitle>
      </div>
      <AtomicButton size="m">Proceed to Checkout</AtomicButton>
    </div>
  );
}
