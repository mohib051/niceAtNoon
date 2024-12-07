
import name from "../../assets/name.png"

const Footer = () => {
  return (
    <div id="wrapper" className=" bg-gray-950 text-white ">
            <div id="top" className=" flex justify-between p-[60px]">
                <div id="left">
                    <h1 className="text-5xl font-semibold mb-7">Lets, turn some heads!</h1>
                    <button className="border-white-800 border-[1px] rounded-md p-3 w-32">Contact</button>
                </div>
                <div id="right" className="flex gap-10 font-custom ">
                    <div id="div1" className="flex flex-col gap-2" >
                        <h1 className="mb-5">Socials</h1>
                        <h1>Instagram</h1>
                        <h1>LinkedIn</h1>
                    </div>
                    <div id="div2" className="flex flex-col gap-2">
                        <h1 className="mb-5">Sitemap</h1>
                        <h1>Home</h1>
                        <h1>Projecten</h1>
                        <h1>Over</h1>
                        <h1>Contact</h1>
                    </div>
                    <div id="div3" className="flex flex-col gap-2">
                        <h1 className="mb-5">Info</h1>
                        <h1>Algemene voorwaarden</h1>
                        <h1>Privacybeleid</h1>
                        <h1>Cookiebeleid</h1>
                    </div>
                </div>
            </div>
            <div id="bottom">
                <img src={name} alt="" />
            </div>
    </div>
  )
}

export default Footer;