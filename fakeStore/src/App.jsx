import axios from 'axios'
import { useEffect, useState } from 'react'
const App = () => {
    const [products, setproducts] = useState([])
    const getData =async ()=>{
        const serverData= await axios.get("https://fakestoreapi.com/products")
        // console.log(serverData.data)
        setproducts(serverData.data);
        console.log(products)
    }
    // useEffect(() => {
    //   getData();
    // }, []); 

  return (
    <div>
      <button onClick={()=>getData()} className=' bg-blue-400 p-1 w-20'>get data </button> <hr />

      <div className=" bg-blue-500 flex flex-wrap gap-2">
      {products.map((item,index)=>(
        <div  key={index} className=" w-64  h-82 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <img 
            src={item.image} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <p>${item.price}</p>
            <button className="w-full bg-green-400 text-white py-2 px-4">
              Add to Cart
            </button>
          </div>
        </div>
    ))}
    </div>
    </div>
  )
}

export default App