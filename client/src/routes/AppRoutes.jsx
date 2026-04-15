import { Routes, Route } from "react-router-dom";
import ProductsList from "../components/ProductsList";
import AddProduct from "../components/AddProduct";
import UpdateProduct from "../components/UpdateProduct";
import ProductDetails from "../components/ProductDetails";
import Cartitems from "../components/CartItems";
const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList addproucttocart={props.addproucttocart} />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/edit" element={<UpdateProduct />} />
      <Route path="/cart"  element= {<Cartitems/>}  />
      {/* <Route path="/productdetails/:id" element={<ProductDetails />} /> */}
    </Routes>
  );
};

export default AppRoutes;
