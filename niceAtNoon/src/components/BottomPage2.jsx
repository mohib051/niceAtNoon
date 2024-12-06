import cafe from "../assets/cafe.jpg";
import bird from "../assets/bird.jpg";
const BottomPage2 = () => {
  return (
    <div id="main-div" className=" p-4">
      <div id="img-div" className=" group w-full h-full px-14 py-10  relative">
        <img
          className="  rounded-[30px] w-[100%] h-[500px] object-cover  cursor-pointer group-hover:rounded-[165px] transition-all duration-500  group-hover:scale-[1.1] "
          src={cafe}
          alt=""
        />
        <img
          className="  group-hover:opacity-100 group-hover:rounded-[40px] duration-200 ease-linear bg-cyan-300 opacity-0 absolute top-[23%] left-[40%] w-[300px] h-[300px] cursor-pointer "
          src={bird}
          alt=""
        />
      </div>

      <div id="padding-div" className="px-14">
        <h3 className=" opacity-[0.5] font-semibold">Nieuw Schaijk</h3>
        <h2 className=" font-custom ">De smaak van thuis</h2>
        <div id="div" className="flex gap-2">
          <div
            id="brand"
            className="text-xs p-1 w-fit border-gray-800 border-[1px] rounded-lg"
          >
            BRAND STORY
          </div>
          <div
            id="Merkidentiteit"
            className=" text-xs p-1 w-fit border-gray-800 border-[1px] rounded-lg"
          >
            MERKIDENTITEIT
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPage2;
