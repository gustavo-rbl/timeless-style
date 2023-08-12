import { useState } from "react";
import PropTypes from "prop-types";
import useCartStore from "../../store/Store";
import { HandleDiscount } from "../../modules/HandleDiscount";
import { nanoid } from "nanoid";
import Loading from "../Loading/Loading";

function QuantityForm({ product }) {
  // state
  const [order, setOrder] = useState({
    orderID: nanoid(),
    item: product.title,
    img: product.image,
    itemQuantity: 1,
    total: HandleDiscount(product.price),
  });
  const [loading, setLoading] = useState(false);

  // zustand store
  const addToCart = useCartStore((store) => store.addToCart);

  // form action
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    addToCart(order);

    setTimeout(() => {
      setOrder((prev) => ({
        ...prev,
        orderID: nanoid(),
        itemQuantity: 1,
        total: HandleDiscount(product.price),
      }));

      setLoading(false);
    }, 350);
  };

  const handleQuantityChange = (e) => {
    const { value, name } = e.target;

    if (Number(value) === 0) return;

    setOrder((prev) => ({
      ...prev,
      id: nanoid(),
      [name]: Number(value),
      total: HandleDiscount(product.price) * Number(value),
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="itemQuantity">Quantity:</label>

      <br />

      <input
        type="number"
        name="itemQuantity"
        id="itemQuantity"
        min={1}
        max={100}
        value={order.itemQuantity}
        onChange={handleQuantityChange}
        required
      />

      <br />

      {loading ? <Loading /> : <button>Add to cart</button>}
    </form>
  );
}

QuantityForm.propTypes = {
  product: PropTypes.object,
};

export default QuantityForm;
