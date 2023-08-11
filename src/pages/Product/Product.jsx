import { useLoaderData } from "react-router-dom";

function Product() {
  const product = useLoaderData();

  return <div>Product</div>;
}

export default Product;
