import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slicers/authSlicer";
import knightSlice from "./slicers/knightSlicer";
import clubSlice from "./slicers/clubSlicer";
import horseSlice from "./slicers/horseSlicer";
import raceSlice from "./slicers/raceSlicer";
import trainSlice from "./slicers/trainSlicer";
const store = configureStore({
  reducer: {
    userSlice: userSlice,
    knightSlice: knightSlice,
    clubSlice: clubSlice,
    horseSlice: horseSlice,
    raceSlice: raceSlice,
    trainSlice: trainSlice,
  },
});
export default store;