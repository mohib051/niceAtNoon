/* eslint-disable react/prop-types */

const Nav = ({productData , cartData}) => {

  //  const data = productData.filter((item)=> item.added)
   console.log(cartData)
  
  return (
    <nav className="flex justify-between items-center bg-gray-400 text-white p-4">
    <h1 className="text-xl font-bold">Amazon Products</h1>
    <div className="flex items-center gap-2">
        <i className="ri-shopping-cart-line"></i>
        <span className="text-lg">Cart ({cartData.length})</span>
    </div>
</nav>
  ) 
}

export default Nav

