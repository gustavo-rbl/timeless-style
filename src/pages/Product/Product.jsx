import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";
import { HandleDiscount } from "../../modules/HandleDiscount";
import useCartStore from "../../store/Store";
import style from "./Product.module.css";
import IndexStyle from "../../css/Index.module.css";
import { FaCircleXmark } from "react-icons/fa6";

function Product() {
  // fetched product
  const product = useLoaderData();

  // state
  const [order, setOrder] = useState({
    orderID: nanoid(),
    item: product.title,
    img: product.image,
    itemQuantity: 1,
    total: HandleDiscount(product.price),
  });

  const [added, setAdded] = useState(false);

  // zustand store
  const addToCart = useCartStore((store) => store.addToCart);

  // form action
  const handleSubmit = (e) => {
    e.preventDefault();

    if (order.itemQuantity === 0) return;

    addToCart(order);

    setAdded(true);
  };

  const handleQuantityChange = (e) => {
    const { value, name } = e.target;

    setOrder((prev) => ({
      ...prev,
      id: nanoid(),
      [name]: Number(value),
      total: HandleDiscount(product.price) * Number(value),
    }));
  };

  const handleClose = () => {
    setOrder((prev) => ({
      ...prev,
      orderID: nanoid(),
      itemQuantity: 1,
      total: HandleDiscount(product.price),
    }));

    setAdded(false);
  };
  return (
    <>
      <img src={product.image} alt={product.img} className={style.productImg} />
      <h2>{product.title}</h2>

      {added ? (
        <>
          <h4>Has been added to your cart.</h4>
          <h4>Quantity: {order.itemQuantity}</h4>
          <h4>Total: ${order.total.toFixed(2)}</h4>
          <FaCircleXmark className={style.closeIcon} onClick={handleClose} />
        </>
      ) : (
        <>
          <p>
            &#9733;{product.rating.rate}/5 ({product.rating.count})
          </p>

          <p>{product.description}</p>

          <p>
            <span className={IndexStyle.discount}>${HandleDiscount(product.price)}</span>{" "}
            <span className={IndexStyle.originalPrice}>${product.price.toFixed(2)}</span>
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="itemQuantity">Quantity:</label>

            <div className={`${IndexStyle.displayFlex} ${IndexStyle.gap}`}>
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

              <button className={IndexStyle.buttonV01}>Add to cart</button>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default Product;
