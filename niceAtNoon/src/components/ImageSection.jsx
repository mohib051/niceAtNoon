import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.webp"
import img4 from "../assets/img4.webp"
import img5 from "../assets/img5.webp"


const ImageSection = () => {
  return (
    <div className="w-full h-[100vh] flex gap-4 px-6 py-4 overflow-x-auto" >
        <img className="w-[33%] rounded-[80px]   object-cover" src={img1} alt="" />
        <img className="w-[33%] rounded-[80px]  object-cover" src={img2} alt="" />
        <img className="w-[33%] rounded-[80px]  object-cover" src={img3} alt="" />
        <img className="w-[33%] rounded-[80px]  object-cover" src={img4} alt="" />
        <img className="w-[33%] rounded-[80px]  object-cover" src={img5} alt="" />
    </div>
  )
}

export default ImageSection