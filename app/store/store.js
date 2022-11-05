import { configureStore } from "@reduxjs/toolkit";
import orderPlantsReducer from "./orderPlantsReducer";

export const store= configureStore({
    reducer:{
      orderPlantsReducer: orderPlantsReducer,
    },
})