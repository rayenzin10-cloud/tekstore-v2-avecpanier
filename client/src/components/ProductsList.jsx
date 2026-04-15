import deleteicon from "../assets/deleteicon.png";
import edit from "../assets/edit.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata, deleteproduct } from "../redux/productreducer";
import { useNavigate } from "react-router-dom";
const ProductsList = (props) => {
  const dispatch = useDispatch();
const nav = useNavigate()
  const data = useSelector((state) => {
    return state.products.data;
  });

  useEffect(() => {
    dispatch(getdata());
  }, []);

  return (
    <div className="products-list">
      {data.map((el, i) => {
        return (
          <div
            className="product-card"
            key={i}

            // onClick={()=> { nav(`/productdetails/${el.id}` )  }}
          >
            <div className="product-card-buttons">
              <img
                src={edit}
                className="icon-btn edit-btn"
                title="Edit"

                onClick={()=> {
                nav("/edit" , {state : {product : el}})
                }}
              />
              <img
                src={deleteicon}
                className="icon-btn delete-btn"
                title="Delete"
                onClick={() => {
                  dispatch(deleteproduct(el.id));
                }}
              />
            </div>
            <img src={el.imageUrl} />
            <div className="card-body">
              <span className="card-item-cat"> {el.categories} </span>
              <h2> {el.name} </h2>
              <p> {el.description} </p>
              <h5 className="price">{el.price}$</h5>
              <button className="add-cart-btn" 
              
              onClick={()=> {
                    

                props.addproucttocart(el.id)


              }}
              
              >Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
