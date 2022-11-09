import { configureStore } from "@reduxjs/toolkit";
import orderPlantsReducer from "./orderPlantsReducer";
import usersReducer from "./usersReducer";
import { setupListeners } from '@reduxjs/toolkit/query';
import { plantsApi } from '../../services/plants';

export const store = configureStore({
  reducer: {
    [plantsApi.reducerPath]: plantsApi.reducer,
    orderPlantsReducer: orderPlantsReducer,
    usersReducer: usersReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(plantsApi.middleware),
})

setupListeners(store.dispatch);
// The thunk middleware was automatically added
