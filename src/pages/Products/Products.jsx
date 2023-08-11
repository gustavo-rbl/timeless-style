import { nanoid } from "nanoid";
import { Link, useLoaderData } from "react-router-dom";
import { HandleDiscount } from "../../modules/HandleDiscount";

function Products() {
  const products = useLoaderData();

  return (
    <>
      {products.map((product) => (
        <div key={nanoid()}>
          <p>{product.category.toUpperCase()}</p>

          <img src={product.image} alt={product.title} />

          <h2>
            ${HandleDiscount(product.price)} <span>${product.price}</span>
          </h2>

          <h2>{product.title}</h2>

          <p>
            &#9733;{product.rating.rate}/5 ({product.rating.count})
          </p>

          <button>
            <Link to={product.id.toString()}>View Details</Link>
          </button>
        </div>
      ))}
    </>
  );
}

export default Products;
