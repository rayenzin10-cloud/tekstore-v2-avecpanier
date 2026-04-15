import axios from "axios";
import { useState, useEffect } from "react";
const Cartitems = () => {
  const [data, setdata] = useState([]);

  let cartid = JSON.parse(localStorage.getItem("cartid"));

  const getitemsfromcart = () => {
    axios
      .get(`https://tek-server-hyxr.onrender.com/api/cart/${cartid}`)
      .then((respsonse) => {
        console.log(respsonse.data);

        setdata(respsonse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getitemsfromcart();
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
