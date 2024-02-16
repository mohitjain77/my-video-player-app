import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleSelectedVideo } from "../utils/videoSlice";

const VideoListView = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-span-3 pt-3 relative h-screen pr-3">
        {props.videoMetaData?.categories?.map((category, index) => {
          return (
            <div
              key={index}
              className="max-h-screen overflow-y-auto scroll-smooth"
            >
              <div className="text-sm font-bold tracking-widest font-raleway capitalize md:pb-3 pl-6 md:pl-0 text-gray-700">
                recommanded videos
              </div>
              {category?.videos?.map((video, i) => (
                <Link
                  to={`/playlist/video/${encodeURIComponent(video?.sources[0])}`}
                >
                  <div
                    key={i}
                    className="grid grid-cols-12 bg-white md:p-0 p-5 rounded-lg w-full h-28"
                  >
                    <div
                      className=" col-span-5 cursor-pointer w-full h-24 bg-cover bg-center bg-no-repeat rounded-lg"
                      style={{ backgroundImage: `url(${video?.thumb})` }}
                      onClick={() => dispatch(handleSelectedVideo(video))}
                    ></div>
                    <div className=" col-span-7 p-2 w-full h-28">
                      <div className="hover:underline font-bold font-raleway tracking-widest text-sm text-gray-700">
                        {video?.title}
                      </div>
                      <div className="text-justify text-xs line-clamp-3 text-gray-600">
                        {video?.description}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideoListView;
