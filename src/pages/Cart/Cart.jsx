import useCartStore from "../../store/Store";

function Cart() {
  const cart = useCartStore((store) => store.cart);
  const deleteFromCart = useCartStore((store) => store.deleteFromCart);
  const clearCart = useCartStore((store) => store.clearCart);
  const getTotal = useCartStore((store) => store.getTotal);

  return (
    <>
      {cart.length === 0 ? (
        <h2>Empty</h2>
      ) : (
        <>
          {cart.map((order) => (
            <div key={order.orderID}>
              <img src={order.img} alt={order.item} />

              <div>
                <h2>{order.item}</h2>

                <div>
                  <p>{order.itemQuantity}</p>

                  <p>${order.total}</p>
                </div>
              </div>

              <button onClick={() => deleteFromCart(order.orderID)}>X</button>
            </div>
          ))}

          <button onClick={clearCart}>Clear cart</button>

          <p>Total: ${getTotal()}</p>

          <button>Checkout</button>
        </>
      )}
    </>
  );
}

export default Cart;
