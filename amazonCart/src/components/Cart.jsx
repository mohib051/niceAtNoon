
const Cart = ({image, name , price , handleDelete , index}) => {
  return (
                <div id="card" className='w-[80%] h-40 bg-yellow-200 mt-2 flex gap-5'>
                    <div id="imgDiv" className=' w-40 h-full bg-slate-200'>
                        <img  className='w-full h-full object-cover' src={image}alt="" />
                    </div>
                    <div id="detailsdiv">
                        <h1 className='text-3xl'>{name} </h1>
                        <h2 className='text-2xl'> {price} </h2>
                        <button onClick={()=>handleDelete(index)} className='bg-red-400 w-20  rounded-md p-3'>Delete</button>
                    </div>
                    
                </div>

  )
}

export default Cart