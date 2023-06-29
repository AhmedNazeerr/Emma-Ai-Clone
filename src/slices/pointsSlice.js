import { createSlice } from "@reduxjs/toolkit";


const pointsSlice = createSlice({
  name: "points",
  initialState: { points: 5 },
  reducers: {
    addPoints: (state, action) => {
      state.points += action.payload.value;
    },
    subtractPoints: (state, action) => {
      state.points -= action.payload.value;
      if(state.points<=0){
        state.points=0
      }
      // console.log("state=>", state);
      // console.log("payload=>", payload);
      // if (state.points <= 0) {
      //   state.points = 0
      //   // const navigation = action.payload.navigation;

      //   // navigation.replace("Subscription");
      // }
    },
    setPoints: (state, action) => {
      const { points } = action.payload;

      if (points) {
        state.points = points;
      }
    },
  },
});

export const { addPoints, subtractPoints, setPoints } = pointsSlice.actions;
export default pointsSlice.reducer;