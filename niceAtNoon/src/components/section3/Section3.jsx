import bigimage from "../../assets/bigimage.webp";

const Section3 = () => {
  return (
    <div id="wrapper-div " className=" p-2">
        <div className="flex flex-col justify-center items-center text-center w-full   h-full p-3 gap-7">
                    <div id="top" className="">
                        <h3>Our belief</h3>
                        <h1 className="font-bold text-8xl w-[80%] pl-48 ">
                            Brands just want To have fun
                        </h1>
                    </div>
                    <div id="image" className="w-[90%] rounded-[90px] overflow-hidden">
                          <img src={bigimage} alt="" />
                    </div>
        </div>
        <div id="below-container" className="flex gap-3 p-3 items-center justify-start pl-20">
             <div className="bg-gray-400 p-2  rounded-[20px]"><h1>Brand Story sessies</h1></div>
        <h1>Samen ontdekken we jouw merkverhaal</h1>
        </div>
    
    </div>
  );
};

export default Section3;
