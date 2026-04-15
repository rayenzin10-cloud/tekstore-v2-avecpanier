import "./App.css";
import Navbar from "./components/Navbar";
import axios from "axios";
import AppRoutes from "./routes/AppRoutes";
const App = () => {
  const addproucttocart = async (productid) => {
    let cartid = JSON.parse(localStorage.getItem("cartid"));
    try {
      if (!cartid) {
        let respsonse = await axios.post(
          "https://tek-server-hyxr.onrender.com/api/cart/",
        );
        console.log(respsonse);
        localStorage.setItem("cartid", respsonse.data.id);
      }

      await axios.post(
        `https://tek-server-hyxr.onrender.com/api/cart/${cartid}`,

        {
          productId: productid,
          quantity: 1,
        },
      );
      alert("produit ajouté");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <AppRoutes addproucttocart={addproucttocart} />
    </div>
  );
};

export default App;
