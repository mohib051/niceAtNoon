

// eslint-disable-next-line react/prop-types
const Product = ({name,details,image,price, dummy,added, index}) => {
  return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <img 
                src={image} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-700 mb-4">{details}</p>
                <p>{price}</p>
                <button 
                    onClick={()=>dummy(index)}
                    className={`w-full ${added ? "bg-green-400":"bg-blue-400" } text-white py-2 px-4 rounded`}
                >
                   {added?"Item Added": "Add to Cart"}
                </button>
            </div>
        </div>
  )
}

export default Product