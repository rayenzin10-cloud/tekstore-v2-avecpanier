import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./productreducer";
import cardreducer from "./cartreducer";

export const store = configureStore({
  reducer: {
    products: productreducer,
    card: cardreducer,

  },
});

