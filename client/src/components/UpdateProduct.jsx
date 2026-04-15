import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editproduct } from "../redux/productreducer";
const UpdateProduct = () => {
  const location = useLocation();
  const nav = useNavigate();
  const post = location.state.product;
  const dispatch = useDispatch();
  const [name, setname] = useState(post.name || "");
  const [price, setprice] = useState(post.price || "");
  const [descrip, setdescrip] = useState(post.description || "");
  const [image, setimage] = useState(post.imageUrl || "");

  const edit = (e) => {
    e.preventDefault();
    dispatch(
      editproduct( {id : post.id, 
        product : {
        name: name,
        price: price,
        description: descrip,
        imageUrl: image,
      }}),
    );
    nav("/");
  };

  return (
    <form className="update-product-form" onSubmit={edit}>
      <h2>Update Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(event) => {
          setname(event.target.value);
        }}
      />

      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(event) => {
          setprice(event.target.value);
        }}
      />

      <textarea
        placeholder="Description"
        value={descrip}
        onChange={(event) => {
          setdescrip(event.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(event) => {
          setimage(event.target.value);
        }}
      />

      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProduct;
