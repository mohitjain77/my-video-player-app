import { Link } from "react-router-dom";
import ThumbnailView from "./Thumbnailview";
import { useDispatch, useSelector } from "react-redux";
import { handleSelectedVideo } from "../utils/videoSlice";
import { useEffect } from "react";
import { setSearchDivToggle } from "../utils/playlistSlice";
const VideoGridView = () => {
  const dispatch = useDispatch();
  const handleOnClickForVideo = (video) => {
    dispatch(handleSelectedVideo(video));
  };
  useEffect(() => {
    dispatch(setSearchDivToggle(true));
  });
  const videoData = useSelector((store) => store.videoContent.videoData);
  return (
    <>
      <div className="mt-5 md:flex md:flex-wrap md:pl-8 pl-4">
        {videoData.length > 0 ? (
          videoData?.map((video, index) => {
            return (
              <div
                className="w-[320px] h-[210px] cursor-pointer rounded-lg m-3"
                key={index}
                onClick={() => handleOnClickForVideo(video)}
              >
                <Link
                  to={`/playlist/video/${encodeURIComponent(video?.sources[0])}`}
                >
                  <ThumbnailView video={video} />
                </Link>
              </div>
            );
          })
        ) : (
          <div className="text-red-500 tracking-widest text-sm capitalize">
            no video matches the search
          </div>
        )}
      </div>
    </>
  );
};

export default VideoGridView;
