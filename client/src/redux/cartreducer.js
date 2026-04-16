import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getitemsfromcart = createAsyncThunk("/fetch/cart", async () => {
    const response = await axios.get(
        'https://tek-server-hyxr.onrender.com/api/cart/${cartid}',
    );
    return response.data;
});



export const deleteitemsfromcart = createAsyncThunk("/delete/cart", async (id, { dispatch }) => {
    const response = await axios.delete(

        `https://tek-server-hyxr.onrender.com/api/cart/${id}`
    );
    dispatch(getitemsfromcart())

});

export const edititemsfromcart = createAsyncThunk("/edit/cart", async ({ id, product }, { dispatch }) => {
    console.log(product);

    const response = await axios.put(

        `https://tek-server-hyxr.onrender.com/api/cart/${id}`, product
    );
    console.log(response);

    dispatch(getitemsfromcart())

});

const productslice = createSlice({
    name: "cart",
    initialState: {
        data: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getitemsfromcart.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(getitemsfromcart.rejected, (state) => {
                state.error = "error fitshin data problem";
            });
    },
});

export default cardslice.reducer;