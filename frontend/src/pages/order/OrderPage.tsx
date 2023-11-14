import {
  ChildTemplate,
  HeaderLayout,
  OrderInfo,
  ParentTemplate,
} from '../../components';
import { useOrderPage } from './OrderPage.hook';

export default function OrderPage() {
  const [
    userInfo,
    logOutHandler,
    paypalPaid,
    order,
    checkPaid,
    clientId,
    date,
    dateHandler,
  ] = useOrderPage();

  return (
    <HeaderLayout userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size="s">
        <ChildTemplate position="center" size="full">
          <OrderInfo
            paypalPaid={paypalPaid}
            order={order}
            checkPaid={checkPaid}
            clientId={clientId}
            currentDate={dateHandler.format(date)}
          />
        </ChildTemplate>
      </ParentTemplate>
    </HeaderLayout>
  );
}
