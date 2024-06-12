import { Routes as RouterRoutes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product/[id]";
import Shop from "../pages/Shop";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";

const AppRoutes = () => {

  return (
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
      </RouterRoutes>
  );
};

export default AppRoutes;