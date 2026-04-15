import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const [post, setpost] = useState({});
const {id} = useParams()
  useEffect(() => {
    axios
      .get(`https://tek-server-hyxr.onrender.com/api/products/${id}`)
      .then((response) => {
        console.log(response.data);

        setpost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={post.imageUrl} />
      </div>
      <div className="product-info">
        <h1> {post.name} </h1>
        <p> {post.description}</p>
        <h2>Price : {post.price} </h2>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
