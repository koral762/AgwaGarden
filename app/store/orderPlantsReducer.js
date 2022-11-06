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
    plantsCategories:
      [
        {
          id: "green_head",
          name: "Green Head",
          plants: [
            {
              id: "pac_choi_mei_qing_choi",
              name: "Pac Choi - Mei Qing Choi"
            },
            {
              id: "lettuce_green_butter",
              name: "Lettuce - Green Butter"
            },
            {
              id: "lettuce_red_butter",
              name: "Lettuce - Red Butter"
            },
            {
              id: "lettuce_green_sweet_crisp",
              name: "Lettuce - Green Sweet Crisp"
            },
            {
              id: "lettuce_green_oakleaf",
              name: "Lettuce - Green Oakleaf"
            },
            {
              id: "lettuce_romain",
              name: "Lettuce - Romain"
            },
            {
              id: "lettuce_cherokee",
              name: "Lettuce - Cherokee"
            }]
        },
        {
          id: "greens",
          name: "Greens",
          plants: [
            {
              id: "arugula_esmee",
              name: "Arugula - Esmee"
            },
            {
              id: "chard_bright_lights",
              name: "Chard - Bright Lights"
            },
            {
              id: "mustard_greens_red_giant",
              name: "Mustard Greens - Red Giant"
            }]
        },
        {
          id: "vines",
          name: "Vines",
          plants: [
            {
              id: "cucumber_iznik",
              name: "Cucumber - Iznik"
            },
            {
              id: "tomato_sunrise",
              name: "Tomato - Sunrise"
            },
            {
              id: "tomato_bigdena",
              name: "Tomato - Bigdena"
            },
            {
              id: "tomato_beorange",
              name: "Tomato - Beorange"
            }
          ]
        }
      ],
    quantityLimit: 0,
    newOrder: []
  },

  reducers: {

    getAvailablePlants: (state, action) => {
    },
    addOrRemoveSelectedPlant: (state, action) => {

      const { id, isSelected } = action.payload;

      const objPlantIdx = current(state.availablePlants).findIndex(item => item.id === id);
      state.availablePlants[objPlantIdx].isSelected = !isSelected;

      state.selectedPlants = state.availablePlants.filter(item => item.isSelected);
      state.quantityLimit = state.selectedPlants.length;

    },
    getQuantityLimit: (state, action) => {
      return current(state.selectedPlants).length;
    }

  }

})

export const { addOrRemoveSelectedPlant, getAvailablePlants } = orderPlantsReducer.actions;
export default orderPlantsReducer.reducer;