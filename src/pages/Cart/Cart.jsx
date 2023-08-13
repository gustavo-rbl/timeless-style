import useCartStore from "../../store/Store";
import { Link } from "react-router-dom";
import IndexStyle from "../../css/Index.module.css";
import style from "./Cart.module.css";
import { FaTrashCan } from "react-icons/fa6";

function Cart() {
  const cart = useCartStore((store) => store.cart);
  const deleteFromCart = useCartStore((store) => store.deleteFromCart);
  const getTotal = useCartStore((store) => store.getTotal);

  return (
    <>
      {cart.length === 0 ? (
        <div>
          <p>There&#39;s nothing in your shopping cart, but the possibilities are endless!</p>
          <Link to=".." relative="path" className={IndexStyle.buttonV01}>
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          {cart.map((order) => (
            <div key={order.orderID} className={style.cartItem}>
              <img src={order.img} alt={order.item} className={style.cartImg} />

              <div>
                <h2 className={style.title}>{order.item}</h2>

                <div className={style.summary}>
                  <p>Quantity: {order.itemQuantity}</p>
                  <p>Total: ${order.total.toFixed(2)}</p>
                </div>
              </div>

              <FaTrashCan onClick={() => deleteFromCart(order.orderID)} className={style.delete} />
            </div>
          ))}

          <div className={style.checkout}>
            <p>Total: ${getTotal().toFixed(2)}</p>
            <button className={IndexStyle.buttonV01}>Checkout</button>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
