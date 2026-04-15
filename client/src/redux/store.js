import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./productreducer";

export const store = configureStore({
  reducer: {
    products: productreducer,
    
  },
});

