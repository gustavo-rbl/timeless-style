import { nanoid } from "nanoid";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { HandleDiscount } from "../../modules/HandleDiscount";
import MakeSlug from "../../modules/MakeSlug";
import style from "./Products.module.css";
import IndexStyle from "../../css/Index.module.css";
import Animation from "../../css/Animation.module.css";
import SetTitle from "../../modules/SetTitle";

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

  // set page title
  SetTitle("Products");

  return (
    <div className={Animation.fadeIn}>
      <nav>
        <ul className={style.filterNav}>
          {categories.map((category) => {
            const isActive =
              typeFilter === MakeSlug(category) ? IndexStyle.buttonV02 : IndexStyle.buttonV01;

            return (
              <li
                key={nanoid()}
                onClick={() => setSearchParams({ category: `${MakeSlug(category)}` })}
                className={isActive}
              >
                {category}
              </li>
            );
          })}

          {typeFilter && (
            <li onClick={() => setSearchParams({})} className={IndexStyle.buttonV01}>
              Clear Filter
            </li>
          )}
        </ul>
      </nav>

      <div className={style.displayedProducts}>
        {displayedProducts.map((product) => (
          <div key={nanoid()} className={style.product}>
            <p className={style.productCategory}>{product.category.toUpperCase()}</p>

            <img src={product.image} alt={product.title} className={style.productsImg} />

            <p>
              <span className={IndexStyle.discount}>${HandleDiscount(product.price)}</span>{" "}
              <span className={IndexStyle.originalPrice}>${product.price}</span>
            </p>

            <h4 className={style.productTitle}>{product.title}</h4>

            <div className={style.productDetails}>
              <p>
                &#9733;{product.rating.rate}/5 ({product.rating.count})
              </p>

              <Link to={product.id.toString()} className={IndexStyle.buttonV01}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
