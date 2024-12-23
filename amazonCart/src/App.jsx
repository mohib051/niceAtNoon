import { useState } from "react";
import Nav from "./components/Nav";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useEffect } from 'react';

const App = () => {
  const data = [
    {
      productName: "Wireless Mouse",
      productDetails: "A high-precision wireless mouse with ergonomic design.",
      productImage:
        "https://images.unsplash.com/photo-1721332153370-56d7cc352d63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8ttps://via.placeholder.com/150",
      price: "$10",
      added: false,
    },
    {
      productName: "Gaming Keyboard",
      productDetails: "RGB backlit keyboard with mechanical keys for gamers.",
      productImage:
        "https://images.unsplash.com/photo-1732647169576-49abfdef3348?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8eholder.com/150",
      price: "$20",
      added: false,
    },
    {
      productName: "Bluetooth Speaker",
      productDetails:
        "Portable speaker with high-quality sound and long battery life.",
      productImage:
        "https://plus.unsplash.com/premium_photo-1670793631007-e86c6ddfd812?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3Dlder.com/150",
      price: "$30",
      added: false,
    },
    {
      productName: "Smart Watch",
      productDetails:
        "Fitness tracker with heart rate monitor and notifications.",
      productImage:
        "https://images.unsplash.com/photo-1719937051058-63705ed35502?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3Deholder.com/150",
      price: "$40",
      added: false,
    },
    {
      productName: "Laptop Stand",
      productDetails:
        "Adjustable laptop stand for comfortable working posture.",
      productImage:
        "https://images.unsplash.com/photo-1734507382924-cd7b52ab7eef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3Dvia.placeholder.com/150",
      price: "$50",
      added: false,
    },
    {
      productName: "Noise Cancelling Headphones",
      productDetails: "Over-ear headphones with active noise cancellation.",
      productImage:
        "https://images.unsplash.com/photo-1734205402869-d322431ca4f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3Deholder.com/150",
      price: "$60",
      added: false,
    },
    {
      productName: "External Hard Drive",
      productDetails: "1TB external hard drive for secure data storage.",
      productImage:
        "https://images.unsplash.com/photo-1721332153282-3be1f363074d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3Deholder.com/150",
      price: "$70",
      added: false,
    },
    {
      productName: "USB-C Hub",
      productDetails:
        "Multi-port hub for connecting various devices to USB-C laptops.",
      productImage:
        "https://images.unsplash.com/photo-1731952161702-3c15716ce06e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D.placeholder.com/150",
      price: "$80",
      added: false,
    },
    {
      productName: "4K Monitor",
      productDetails: "27-inch 4K monitor with ultra-clear display quality.",
      productImage:
        "https://plus.unsplash.com/premium_photo-1733760124985-69e66a83271d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3Dplaceholder.com/150",
      price: "$90",
      added: false,
    },
    {
      productName: "Portable Charger",
      productDetails: "Compact power bank with fast charging capabilities.",
      productImage:
        "https://images.unsplash.com/photo-1729892938603-ea99ccbb0c31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3Dlaceholder.com/150",
      price: "$100",
      added: false,
    },
  ];
  const [productData, setproductData] = useState(data);

  const [cartData,setCartData] = useState([]);

  const handleClick = (changingindex) => {
    setproductData((prev) => {
      return prev.map((item, index) => {
        if (index === changingindex) {
          return { ...item, added: !item.added };
        }
        return item;
      });
    });
  };
  const handleDelete = (changeingindex)=>{
      // console.log(cartData);
    //  const newCartvalue= cartData.filter((item ,index)=>{
    //       return index !=changeingindex
    //   })
    //   setCartData(newCartvalue);
    //   // console.log(cartData);

    const productToRemove = cartData[changeingindex];
         // Update productData to set 'added' to false for the removed product
    setproductData((prev) =>
      prev.map((item) =>
        item.productName === productToRemove.productName
          ? { ...item, added: false }
          : item
      )
    );
    setCartData((prev)=>prev.filter((item,index)=> index !== changeingindex));


  }

  useEffect(function(){
   const Cart =  productData.filter((item)=> item.added);
   setCartData(Cart);
  },[productData])

  // console.log(cartData);

  const total = cartData.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0);

  
  return (
    <div className="flex flex-col">
      <Nav productData={productData} cartData={cartData} />

      <div id="wrapper" className='flex'>
        <div id="product-div" className="flex flex-wrap w-[70%]">
          {productData.map((item, index) => (
            <Product
              key={index}
              name={item.productName}
              details={item.productDetails}
              image={item.productImage}
              price={item.price}
              dummy={handleClick}
              added={item.added}
              index={index}
            />
          ))}
        </div>
        <div id="cart-div" className=' w-[40%] h-screen p-3 overflow-y-auto'>
              <h1 className='text-3xl  uppercase font-bold'>CheckOut</h1>

              {cartData.map((item, index)=>(
                <Cart  key={index} image={item.productImage} name={item.productName} price ={item.price}  
                index = {index} handleDelete ={handleDelete} />
              ) )}  
            
            
            <h1 className='uppercase mt-3 font-semibold'>total bill : ${total}</h1>
        </div>
        
      </div>
    </div>
  );
};

export default App;
