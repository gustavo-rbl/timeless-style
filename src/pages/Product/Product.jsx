import { useLoaderData } from "react-router-dom";
import { HandleDiscount } from "../../modules/HandleDiscount";
import QuantityForm from "../../components/QuantityForm/QuantityForm";
import style from "./Product.module.css";
import IndexStyle from "../../css/Index.module.css";

function Product() {
  // fetched product
  const product = useLoaderData();

  return (
    <>
      <div>
        <img src={product.image} alt={product.title} className={style.productImg} />

        <h2>{product.title}</h2>

        <p>
          &#9733;{product.rating.rate}/5 ({product.rating.count})
        </p>

        <p>{product.description}</p>

        <p>
          <span className={IndexStyle.discount}>${HandleDiscount(product.price)}</span>{" "}
          <span className={IndexStyle.originalPrice}>${product.price}</span>
        </p>
      </div>

      <QuantityForm product={product} />
    </>
  );
}

export default Product;
