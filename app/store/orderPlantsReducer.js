import { createSlice } from "@reduxjs/toolkit";

const orderPlantsReducer = createSlice({
  name: "orderPlantsReducer",

  initialState: {
    availablePlants: [
      {
        id: "cucumber_iznik1",
        name: "Cucumber - Iznik",
        imageId: "iznik"
      },
      {
        id: "tomato_sunrise1",
        name: "Tomato - Sunrise",
        imageId: "tomato_sunrise"
      },
      {
        id: "tomato_bigdena1",
        name: "Tomato - Bigdena",
        imageId: "bigdena"
      },
      {
        id: "cucumber_iznik",
        name: "Cucumber - Iznik",
        imageId: "iznik"
      },
      {
        id: "tomato_sunrise",
        name: "Tomato - Sunrise",
        imageId: "tomato_sunrise"
      },
      {
        id: "tomato_bigdena",
        name: "Tomato - Bigdena",
        imageId: "bigdena"
      }
    ],
    selectedPlants: [{
      id: "tomato_sunrise",
      name: "Tomato - Sunrise",
      imageId: "tomato_sunrise"
    },
    {
      id: "tomato_bigdena",
      name: "Tomato - Bigdena",
      imageId: "bigdena"
    }],
    plantsCategories: [],
    newOrder: []
  },

  reducers: {

    getAvailablePlants: (state, action) => {
      state.availablePlants = [{ koko: "koko" }];
    },
    addOrRemoveSelectedPlant: (state, action) => {

      const { id, isSelected } = action.payload;

      if (!isSelected) {
      }


    },


  }


})

export const { addOrRemoveSelectedPlant, getAvailablePlants } = orderPlantsReducer.actions;
export default orderPlantsReducer.reducer;