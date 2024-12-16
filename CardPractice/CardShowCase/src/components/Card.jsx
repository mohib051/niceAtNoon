
// eslint-disable-next-line react/prop-types
const Card = ({name, image, bio , isFriend}) => {
  return (

                <div  id="card-div" className=" w-48 h-64 bg-sky-300 rounded-md flex  flex-col items-center p-2 gap-4"> 
                <div id="circle" className=" w-[70px] h-[70px] bg-slate-300 rounded-full overflow-hidden ">
                    <img className="w-full h-full object-cover" src={image} alt="" />
                </div>
                <h1 className="text-xl font-semibold uppercase">{name}</h1>
                <h3 className="text-xs text-center font-medium h-12">{bio}</h3>

                <button className={` p-3 ${isFriend?"bg-green-600":"bg-blue-500"} uppercase text-xs rounded-md font-semibold`}>{isFriend?"Friends":"Add Friend"}</button>
        </div> 
    
  )
}

export default Card
