import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addproduct } from "../redux/productreducer";
const AddProduct = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [descrip, setdescrip] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const add = (e) => {
    e.preventDefault()
    dispatch(
      addproduct({
        name: name,
        price: price,
        description: descrip,
        imageUrl: image,
        categories: category,
      }),
    );
    nav("/")
  };

  return (
    <form className="add-product-form" onSubmit={add}>
      <label>
        Add your product
        <input
          type="text"
          placeholder="Porduct Name"
          onChange={(event) => {
            setname(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Product price"
          onChange={(event) => {
            setprice(event.target.value);
          }}
        />
        <textarea
          placeholder="Your product description here"
          onChange={(event) => {
            setdescrip(event.target.value);
          }}
        ></textarea>
        <input
          type="text"
          placeholder="Product category"
          onChange={(event) => {
            setcategory(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Product image"
          onChange={(event) => {
            setimage(event.target.value);
          }}
        />
      </label>
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
};
export default AddProduct;
