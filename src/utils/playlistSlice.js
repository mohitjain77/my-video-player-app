import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    searchVideo: "",
    searchDivToggle: true,
  },
  reducers: {
    setSearchVideo: (state, action) => {
      state.searchVideo = action.payload;
    },
    setSearchDivToggle: (state, action) => {
      state.searchDivToggle = action.payload;
    },
  },
});

export const { setSearchVideo, setSearchDivToggle } = playlistSlice.actions;

export default playlistSlice.reducer;
