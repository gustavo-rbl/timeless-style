import { useLoaderData } from "react-router-dom";
import { HandleDiscount } from "../../modules/HandleDiscount";

function Product() {
  const product = useLoaderData();

  return (
    <>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>
        &#9733;{product.rating.rate}/5 ({product.rating.count})
      </p>
      <p>{product.description}</p>
      <p>
        ${HandleDiscount(product.price)} <span>${product.price}</span>
      </p>
    </>
  );
}

export default Product;
