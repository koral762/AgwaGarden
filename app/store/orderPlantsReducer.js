import { createSlice, current } from "@reduxjs/toolkit";

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
    plantsCategories: [],
    newOrder: []
  },

  reducers: {

    getAvailablePlants: (state, action) => {
    },
    addOrRemoveSelectedPlant: (state, action) => {

      const { id, isSelected } = action.payload;

      const objPlantIdx = current(state.availablePlants).findIndex(item => item.id === id);
      state.availablePlants[objPlantIdx].isSelected = !isSelected;
      console.log(current(state.availablePlants));

    },


  }


})

export const { addOrRemoveSelectedPlant, getAvailablePlants } = orderPlantsReducer.actions;
export default orderPlantsReducer.reducer;