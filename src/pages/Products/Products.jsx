import { useLoaderData } from "react-router-dom";

function Products() {
  const products = useLoaderData();

  return <div>Products</div>;
}

export default Products;
