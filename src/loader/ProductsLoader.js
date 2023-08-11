const ProductsLoader = async ({ params }) => {
  const { id } = params;
  let apiUrl = null;

  if (id) {
    apiUrl = `https://fakestoreapi.com/products/${id}`;
  } else {
    apiUrl = `https://fakestoreapi.com/products/`;
  }

  try {
    const response = await fetch(apiUrl, { mode: "cors" });

    if (!response.ok) throw new Error(response.status);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);

    return null;
  }
};

export default ProductsLoader;
