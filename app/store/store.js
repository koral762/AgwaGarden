import { configureStore } from "@reduxjs/toolkit";
import orderPlantsReducer from "./orderPlantsReducer";
import usersReducer from "./usersReducer";

export const store= configureStore({
    reducer:{
      orderPlantsReducer: orderPlantsReducer,
      usersReducer: usersReducer,
    },
})