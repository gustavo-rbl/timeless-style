import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// layout
import RootLayout from "../Layout/RootLayout";
import CompanyLayout from "../Layout/CompanyLayout";

// pages
import Home from "../../pages/Home/Home";
import Products from "../../pages/Products/Products";
import Product from "../../pages/Product/Product";
import Cart from "../../pages/Cart/Cart";
import About from "../../pages/Company/About/About";
import Contact from "../../pages/Company/Contact/Contact";
import PrivacyPolicy from "../../pages/Company/PrivacyPolicy/PrivacyPolicy";
import NotFound from "../../pages/Error/NotFound/NotFound";
import TeamError from "../../pages/Error/AboutError/AboutError";

// loader
import ProductsLoader from "../../loader/ProductsLoader";
import TeamLoader from "../../loader/TeamLoader";

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route
          path="products"
          element={<Products />}
          loader={ProductsLoader}
          errorElement={<NotFound />}
        />

        <Route
          path="products/:id"
          element={<Product />}
          loader={ProductsLoader}
          errorElement={<NotFound />}
        />

        <Route path="company" element={<CompanyLayout />}>
          <Route index element={<About />} loader={TeamLoader} errorElement={<TeamError />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>

        <Route path="cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Router;
