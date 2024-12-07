import Top from "./Top"
import Card from "./Card"
import Bottom from "./Bottom"

const SectionCard = () => {
  return (
    <div className="w-full h-full p-[60px] bg-[#F4F4F1]">
        <Top/>
        <Card/>
        <Bottom/>
    </div>
  )
}

export default SectionCard