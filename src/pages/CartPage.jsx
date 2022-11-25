import { useCartContext } from "../context/cartContext";

const Cart = () => {
  const { getTotal, cart } = useCartContext();
  return <div>{getTotal()}</div>

}
export default Cart;
