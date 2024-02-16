import { useDispatch, useSelector } from "react-redux";
import VideoListView from "./VideoListView";
import { Outlet } from "react-router-dom";
import { videoMetaJson } from "../assets/videoMetaJson";
import { useEffect } from "react";
import { setSearchDivToggle } from "../utils/playlistSlice";
const PlayListView = () => {
  const selectedVideo = useSelector(
    (store) => store.videoContent.selectedVideo
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchDivToggle(false));
  });
  return (
    <div className="relative">
      {selectedVideo && (
        <div className="md:grid md:grid-cols-12">
          <Outlet />
          <VideoListView videoMetaData={videoMetaJson} />
        </div>
      )}
    </div>
  );
};

export default PlayListView;
