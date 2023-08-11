import { nanoid } from "nanoid";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { HandleDiscount } from "../../modules/HandleDiscount";
import MakeSlug from "../../modules/MakeSlug";

function Products() {
  // fetched products
  const products = useLoaderData();

  // search params
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("category");

  // make a new set based on categories received from the api
  const categories = [...new Set(products.map((x) => x.category))];

  // filter products
  const displayedProducts = typeFilter
    ? products.filter((product) => MakeSlug(product.category) === typeFilter)
    : products;

  return (
    <>
      {categories.map((category) => (
        <button
          key={nanoid()}
          onClick={() => setSearchParams({ category: `${MakeSlug(category)}` })}
        >
          {category}
        </button>
      ))}

      {typeFilter && <button onClick={() => setSearchParams({})}>Clear Filter</button>}

      {displayedProducts.map((product) => (
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
