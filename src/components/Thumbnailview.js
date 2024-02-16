const ThumbnailView = (props) => {
  return (
    <>
      <div
        className="relative w-[320px] h-[180px] rounded-lg  bg-cover bg-no-repeat bg-center shadow-lg hover:shadow-2xl"
        style={{ backgroundImage: `url(${props.video.thumb})` }}
      ></div>
      <div className="p-1">
        <h3 className="text-sm font-bold tracking-widest font-raleway hover:underline text-gray-700">
          {props.video.title}
        </h3>
      </div>
    </>
  );
};

export default ThumbnailView;
