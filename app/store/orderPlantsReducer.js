import { createSlice } from "@reduxjs/toolkit"

const orderPlantsReducer = createSlice({
  name: "orderPlantsReducer",

  initialState: {
    availablePlants: [],
    selectedPlants: [],
    plantsCategories: [],
    newOrder: []
  },

  reducers: {

    getAvailablePlants: (state, action) => {
      state.availablePlants=[{koko:"koko"}];
    },
    addToSelectedPlants: (state, action) => {

    }

  }

})

export const { addToSelectedPlants,getAvailablePlants } = orderPlantsReducer.actions;
export default orderPlantsReducer.reducer;