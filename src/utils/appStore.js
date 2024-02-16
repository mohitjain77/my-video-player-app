import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videoSlice";
import playlistSlice from "./playlistSlice";

const appStore = configureStore({
  reducer: {
    videoContent: videoSlice,
    playListContent: playlistSlice,
  },
});

export default appStore;
