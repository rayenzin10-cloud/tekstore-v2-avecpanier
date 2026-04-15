import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getdata = createAsyncThunk("/fetch/products", async () => {
  const response = await axios.get(
    "https://tek-server-hyxr.onrender.com/api/products",
  );
  return response.data;
});
//   => createasyncthunk trajaa haja ml tletha : fulfilled wala pending waala rejected

export const addproduct = createAsyncThunk("/add/products", async (product ) => {
  const response = await axios.post(
    "https://tek-server-hyxr.onrender.com/api/products/add",
    product,
  );
  console.log(response);
});

export const deleteproduct = createAsyncThunk("/delete/products", async (id , {dispatch}) => {
  const response = await axios.delete(
  
    `https://tek-server-hyxr.onrender.com/api/products/${id}`
  );
    dispatch(getdata())

});

export const editproduct = createAsyncThunk("/edit/products", async (  {id , product}  , {dispatch}) => {
  console.log(product);
  
  const response = await axios.put(
  
    `https://tek-server-hyxr.onrender.com/api/products/${id}` , product
  );
  console.log(response);
  
    dispatch(getdata())

});


const productslice = createSlice({
  name: "products",
  initialState: {
    data: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getdata.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getdata.rejected, (state) => {
        state.error = "error fitshin data problem";
      });
  },
});

export default productslice.reducer;
