import brandstory from "../../assets/brandstory.jpg";
import mobile from "../../assets/mobile.jpg";
import laptop from "../../assets/laptop.jpg";
import spark from "../../assets/spark.jpg";

const Card = () => {
  return (
    <div id="main-card-container" className="flex gap-3">
      {/*------ card-1 ------*/}
      <div className=" group rounded-[40px] w-[300px] overflow-hidden">
        <div id="top-div" className="group ">
          <img
            className="w-full  h-[250px]  group hover:rounded-[40px] duration-200 "
            src={brandstory}
            alt=""
          />
        </div>
        <div
          id=" details-div"
          className="bg-[#AA81B7] w-full p-5 text-white group-hover:rounded-[40px] duration-200 "
        >
          <h1 className="font-medium text-xl mb-4">Brand Story</h1>
          <h2>
            Samen creëren we een sterk fundament voor een onweerstaanbaar
            design.
          </h2>
        </div>
      </div>

      <div className=" group rounded-[40px] w-[300px] overflow-hidden">
        <div id="top-div" className="group ">
          <img
            className="w-full  h-[250px]  group hover:rounded-[40px] duration-200 "
            src={spark}
            alt=""
          />
        </div>
        <div
          id=" details-div"
          className="bg-[#10100F] w-full p-5 text-white group-hover:rounded-[40px] duration-200 "
        >
          <h1 className="font-medium text-xl mb-4">Brand Story</h1>
          <h2>
            Samen creëren we een sterk fundament voor een onweerstaanbaar
            design.
          </h2>
        </div>
      </div>



      <div className=" group rounded-[40px] w-[300px] overflow-hidden">
        <div id="top-div" className="group ">
          <img
            className="w-full  h-[250px]  group hover:rounded-[40px] duration-200 "
            src={laptop}
            alt=""
          />
        </div>
        <div
          id=" details-div"
          className="bg-[#36A96A] w-full p-5 text-white group-hover:rounded-[40px] duration-200 "
        >
          <h1 className="font-medium text-xl mb-4">Brand Story</h1>
          <h2>
            Samen creëren we een sterk fundament voor een onweerstaanbaar
            design.
          </h2>
        </div>
      </div>



      <div className=" group rounded-[40px] w-[300px] overflow-hidden">
        <div id="top-div" className="group ">
          <img
            className="w-full  h-[250px]  group hover:rounded-[40px] duration-200 "
            src={mobile}
            alt=""
          />
        </div>
        <div
          id=" details-div"
          className="bg-[#FA8A58] w-full p-5 text-white group-hover:rounded-[40px] duration-200 "
        >
          <h1 className="font-medium text-xl mb-4">Brand Story</h1>
          <h2>
            Samen creëren we een sterk fundament voor een onweerstaanbaar
            design.
          </h2>
        </div>
      </div>

    </div>
  );
};
export default Card;
