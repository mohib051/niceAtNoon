const TopPage2 = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col items-center justify-center gap-10  text-center relative">
        <h2>Cases</h2>
        <p className="font-medium text-9xl">HEAD TURNING PROJECTS</p>
        <div
          id="div-badgeItem"
          className="bg-yellow-400 p-4 font-semibold rounded-[20px] absolute top-[90%] left-[60%] rotate-[-10deg]"
        >
          Gotta see m all
        </div>
      </div>
      <div id="btn-div" className="flex justify-end">
        <button className="border-gray-900 border-2 p-3 rounded-md h-[50px] w-[160px] ">
        Alle Projecten
        </button>
      </div>
      
    </div>
  );
};

export default TopPage2;
