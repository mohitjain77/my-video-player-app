import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setSearchVideo } from "../utils/playlistSlice";
import { handleVideoData } from "../utils/videoSlice";
import { videoMetaJson } from "../assets/videoMetaJson";
const Header = () => {
  let searchVideo = useSelector((store) => store.playListContent.searchVideo);
  let searchDivToggle = useSelector(
    (store) => store.playListContent.searchDivToggle
  );
  let dispatch = useDispatch();

  const handleSearchInput = (e) => {
    dispatch(setSearchVideo(e.target.value));
  };
  const handleSearchButton = () => {
    handlePlaylistSearch(videoMetaJson.categories[0].videos);
  };
  const handlePlaylistSearch = (data) => {
    let val = filterData(data);
    dispatch(handleVideoData(val));
  };
  const handleDefault = () => {
    dispatch(setSearchVideo(""));
    dispatch(handleVideoData(videoMetaJson.categories[0].videos));
  };

  const filterData = (data) => {
    return data.filter((video) =>
      video.title.toLowerCase().includes(searchVideo.toLowerCase())
    );
  };
  const handleOnEnter = (e) => {
    if (e.key === "Enter") {
      handleSearchButton();
    }
  };

  return (
    <div className="sticky t-0 z-10 bg-white w-full h-auto  shadow-md md:pl-8  md:p-0 p-2">
      <Link to="/">
        <div className="grid md:grid-cols-12">
          <div className="col-span-3 flex" onClick={handleDefault}>
            <img className="w-16 h-16" alt="logo" src={logo} />
            <h3 className="uppercase text-xs font-bold tracking-widest pt-6 text-purple-700">
              vmp
            </h3>
          </div>
          {searchDivToggle ? (
            <div className="col-span-6 mt-3 md:flex">
              <input
                className="w-full h-9 border border-gray-400 font-raleway rounded-full pl-5 mb-2 md:mb-0 focus:outline-none text-gray-800"
                value={searchVideo}
                placeholder="Search..."
                onChange={handleSearchInput}
                onKeyDown={handleOnEnter}
              />
              <button
                className="md:w-24 md:h-9 w-20 h-7 font-sans bg-purple-500 rounded-full tracking-widest text-white text-xs font-bold uppercase md:ml-3"
                onClick={() => handleSearchButton()}
              >
                search
              </button>
            </div>
          ) : null}
        </div>
      </Link>
    </div>
  );
};

export default Header;
