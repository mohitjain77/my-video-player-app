import { createSlice } from "@reduxjs/toolkit";
import { videoMetaJson } from "../assets/videoMetaJson";

const videoSlice = createSlice({
  name: "videoContent",
  initialState: {
    selectedVideo: videoMetaJson.categories[0].videos[0],
    videoData: videoMetaJson.categories[0].videos,
  },
  reducers: {
    handleSelectedVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },
    handleVideoData: (state, action) => {
      state.videoData = action.payload;
    },
  },
});

export const { handleSelectedVideo, handleVideoData } = videoSlice.actions;

export default videoSlice.reducer;
