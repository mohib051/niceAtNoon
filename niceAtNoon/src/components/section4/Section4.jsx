
import vote from "../../assets/vote.svg"

const Section4 = () => {
  return (
    <div id="wrapper" className=" p-[50px]">
        <div id="top">
            <h1 className="border-b-2 border-gray-900 text-xl font-semibold">Did some cool stuff for</h1>
        </div>
        <div id="bottom" className=" flex justify-between text-xl font-custom opacity-[0.3] ">
            <div id="div1" className="flex flex-col mt-2 gap-2">
                <h1>Bewakingsdienst van MOOK</h1>
                <h1>Van der Heijden bouw</h1>
                <h1>Speyz</h1>
                <h1>Zeth</h1>
            </div>
            <div id="div2" className="flex flex-col mt-2 gap-2">
                <h1>Ozo Verbindzorg</h1>
                <h1>Signal Stream</h1>
                <h1>Gaaf creaties</h1>
                <h1>Lunenburg Events</h1>
            </div>
            <div id="div3" className="flex flex-col mt-2 gap-2 pr-48">
                <h1>Twofiftyk</h1>
                <h1>Adekwaad</h1>
                <h1>Zoet moment</h1>
                <h1>Forex library</h1>
            </div>
        </div>
        <div id="img-div" className="w-full flex justify-end">
            <img className="w-[10%]" src={vote} alt="" />
        </div>
    </div>
  )
}

export default Section4