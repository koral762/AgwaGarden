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
    plantsCategories:[],
    quantityLimit: 0,
    selectedPlants: [],
    newOrder: []
  },

  reducers: {

    getAvailablePlants: (state, action) => {


    },
    
    // setAvailablePlantsFromApi: (state, action) => {
    //   const data = action.payload;
    //   state.availablePlants = [...data];
    // },
    setCategoriesFromApi: (state, action) => {
      const data = action.payload;
      state.plantsCategories = [...data];
    },

    addOrRemoveSelectedPlant: (state, action) => {

      const { id, isSelected } = action.payload;

      const objPlantIdx = current(state.availablePlants).findIndex(item => item.id === id);
      state.availablePlants[objPlantIdx].isSelected = !isSelected;

      state.selectedPlants = state.availablePlants.filter(item => item.isSelected);
      state.quantityLimit = state.selectedPlants.length;

    },
    addToSelectedPlants: (state, action) => {

      const plant = action.payload;
      state.selectedPlants.push(plant);

      const objPlantIdx = current(state.availablePlants).findIndex(item => item.id === plant.id);
      state.availablePlants[objPlantIdx].isSelected = true;
      state.quantityLimit = state.selectedPlants.length;

    },
    getQuantityLimit: (state, action) => {
      return current(state.selectedPlants).length;
    },
    createNewOrder: (state, action) => {

      const user = action.payload;

      const order = {
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address,
        plants: current(state.selectedPlants)
      }

    }

  }

})

export const { addOrRemoveSelectedPlant, getAvailablePlants, addToSelectedPlants, createNewOrder, setCategoriesFromApi } = orderPlantsReducer.actions;
export default orderPlantsReducer.reducer;