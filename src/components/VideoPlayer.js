import { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const params = useParams();
  const { videoSrc } = params;
  const videoRef = useRef(null);
  const selectedVideo = useSelector(
    (store) => store.videoContent.selectedVideo
  );

  return (
    <div className="md:col-span-9 md:p-10 p-5 ">
      <video
        className="shadow-2xl w-full border border-gray-300 rounded-lg cursor-pointer"
        ref={videoRef}
        src={decodeURIComponent(videoSrc)}
        poster={selectedVideo?.thumb}
        width=""
        height=""
        controls
        autoPlay
      ></video>
      <div className="pt-5 cursor-pointer">
        <p className="text-md font-bold tracking-widest font-raleway hover:underline text-gray-700">
          {selectedVideo?.title}
        </p>
        <h3 className="text-xs text-gray-600">{selectedVideo?.description}</h3>
        <p className="text-xs text-gray-600"> - {selectedVideo?.subtitle}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
