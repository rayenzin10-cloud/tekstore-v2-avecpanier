import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getitemsfromcart } from "../redux/cartreducer";
const Cartitems = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.cart.data;
  });

  let cartid = JSON.parse(localStorage.getItem("cartid"));



  useEffect(() => {
    dispatch(getitemsfromcart());
  }, []);

  const total = () => {
    let result = 0;
    data.forEach((element) => {
      result += element.price;
    });
    return result;
  };
  console.log(total());

  const deleteproductfromcart = (idproduit) => {
    axios
      .delete(
        `https://tek-server-hyxr.onrender.com/api/cart/${cartid}/${idproduit}`,
      )

      .then(() => {
        alert("produit supprimé");
        getitemsfromcart();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="cart-list">
      {data.map((el) => {
        return (
          <div className=".cart-item">
            <img src={el.imageUrl} alt="" className="cart-item-image" />
            <span> {el.name} </span>
            <h3> {el.price}</h3>
            <span> {el.quantity}</span>
            <button
              onClick={() => {
                deleteproductfromcart(el.productId);
              }}
            >
              {" "}
              delete{" "}
            </button>
          </div>
        );
      })}
      <h3> total : {total()} </h3>
    </div>
  );
};

export default Cartitems;

// cart  : get pr recuperer les produits fl cart mteena

// post  : post pr ajouter lidentifiant de produit dans le cart

// delete : delelte pr supprimer produit dans le cart
