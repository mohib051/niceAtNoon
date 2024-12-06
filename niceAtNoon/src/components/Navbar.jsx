import logo from '../assets/logo.svg';
const Navbar = () => {
  return (
    <div className=" flex justify-between items-center px-[80px] py-2">
        <h1 className='font-custom font-italic font-extrabold text-3xl'>NiceAtNoon</h1>
        <img  className=' w-[40px]' src={logo} alt="logo" />
        <div className="buttons flex gap-3">
             <button className='p-2 rounded-xl border-gray-700 border-[1px]'>Projecten</button>
             <button className='p-2 rounded-xl border-gray-700 border-[1px]'>Over</button>
             <button className='p-2 rounded-xl border-gray-700 border-[1px]'>Contact</button>
        </div>
    </div>
  )
}

export default Navbar