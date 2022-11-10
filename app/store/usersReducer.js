import { createSlice, current } from "@reduxjs/toolkit";

const usersReducer = createSlice({
  name: "usersReducer",

  initialState: {
    users: [
      {
        id: "123",
        name: "koral sabbah",
        email: "koral762@gmail.com",
        ordersHistory: [{
          id: "1278esik",
          name: "koral sabbah",
          email: "koral762@gmail.com",
          phoneNumber: '0542234567',
          address: 'hashalom 441/21 , tel aviv',
          plants: [
            { id: 'tomato_sunrise1', name: 'Tomato - Sunrise', imageId: 'tomato_sunrise', isSelected: true },

            { id: 'tomato_bigdena1', name: 'Tomato - Bigdena', imageId: 'bigdena', isSelected: true },

            { id: 'cucumber_iznik', name: 'Cucumber - Iznik', imageId: 'iznik', isSelected: true },

            { id: 'tomato_sunrise', name: 'Tomato - Sunrise', imageId: 'tomato_sunrise', isSelected: true },

            { id: 'tomato_bigdena', name: 'Tomato - Bigdena', imageId: 'bigdena', isSelected: true }
          ]

        },
        {
          id: "34554",
          name: "koral sabbah",
          email: "koral762@gmail.com",
          phoneNumber: '0542234567',
          address: 'hashalom 441/21 , tel aviv',
          plants: [
            { id: 'tomato_sunrise1', name: 'Tomato - Sunrise', imageId: 'tomato_sunrise', isSelected: true },

            { id: 'tomato_bigdena1', name: 'Tomato - Bigdena', imageId: 'bigdena', isSelected: true },

            { id: 'cucumber_iznik', name: 'Cucumber - Iznik', imageId: 'iznik', isSelected: true },

            { id: 'tomato_sunrise', name: 'Tomato - Sunrise', imageId: 'tomato_sunrise', isSelected: true },

            { id: 'tomato_bigdena', name: 'Tomato - Bigdena', imageId: 'bigdena', isSelected: true }
          ]

        }],
        isConnected: false

      },
      {
        id: "387162",
        name: "noy kison",
        email: "noyush11@gmail.com",
        ordersHistory: [],
        phoneNumber: "0508823433",
        address: 'nahalal 34 , tel aviv',
        isConnected: true
      },
      {
        id: "2451",
        name: "lior dahan",
        email: "lolo@gmail.com",
        ordersHistory: [],
        phoneNumber: "0508888833",
        address: 'mizfe nof 66 , hifa',
        isConnected: false
      }
    ],

    currentUser: {
      id: "123",
      name: "koral sabbah",
      email: "koral762@gmail.com",
      ordersHistory: [{
        id: "1278esik",
        name: "koral sabbah",
        email: "koral762@gmail.com",
        phoneNumber: '0542234567',
        address: 'hashalom 441/21 , tel aviv',
        plants: [
          { id: 'pac_choi_mei_qing_choi', name: 'Pac Choi - Mei Qing Choi', imageId: 'pac_choi_mei_qing_choi' },
          
          { id: 'lettuce_green_butter', name: 'Lettuce - Green Butter', imageId: 'lettuce_green_butter' },

          { id: 'cucumber_iznik', name: 'Cucumber - Iznik', imageId: 'iznik' },

          { id: 'tomato_sunrise', name: 'Tomato - Sunrise', imageId: 'tomato_sunrise' },

          { id: 'tomato_bigdena', name: 'Tomato - Bigdena', imageId: 'bigdena'}
        ]

      }],
      isConnected: true

    }
  },

  reducers: {

    getCurrentUser: () => {}

  }

})

export const { getCurrentUser } = usersReducer.actions;
export default usersReducer.reducer;