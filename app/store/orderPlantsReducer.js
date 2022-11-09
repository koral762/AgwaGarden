import { createSlice, current } from "@reduxjs/toolkit";

const orderPlantsReducer = createSlice({
  name: "orderPlantsReducer",

  initialState: {
    availablePlants: [],
    plantsCategories: [],
    quantityLimit: 0,
    selectedPlants: [],
    newOrder: []
  },

  reducers: {

    getAvailablePlants: (state, action) => {


    },

    setAvailablePlantsFromApi: (state, action) => {
      const data = action.payload;
      if (current(state.availablePlants).length === 0) {

        data.map(item => {
          state.availablePlants.push({
            id: item.id,
            name: item.name,
            imageId: item.imageId,
            isSelected: false,
          });
        })
      }
    },
    setCategoriesFromApi: (state, action) => {
      const data = action.payload;
      state.plantsCategories = [...data];

    },

    addOrRemoveSelectedPlant: (state, action) => {

      const { id, isSelected } = action.payload;

      const objPlantIdx = current(state.availablePlants).findIndex(item => item.id === id);
      console.log('lllll',state.availablePlants[objPlantIdx].isSelected);
      state.availablePlants[objPlantIdx].isSelected = !isSelected;

      state.selectedPlants = state.availablePlants.filter(item => item.isSelected);
      state.quantityLimit = state.selectedPlants.length;
      console.log('====================================');
      console.log('lllll',state.availablePlants[objPlantIdx].isSelected);
      console.log('====================================');

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

export const { addOrRemoveSelectedPlant, getAvailablePlants, addToSelectedPlants, createNewOrder, setAvailablePlantsFromApi, setCategoriesFromApi } = orderPlantsReducer.actions;
export default orderPlantsReducer.reducer;