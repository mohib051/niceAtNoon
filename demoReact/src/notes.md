Q.1. example for useState,make btns for increasing, decreasing and reset the value,
--> code is wriiten in app.jsx file here 

import { useState } from "react"

const App = () => {
  const [num, setNum] = useState(0)
    
    let increase = function(){
        setNum(num+1)
    }

    function decrease(){
      setNum(num-1)
    }

    let reset = ()=>{
      setNum(0)
    }
  return (
    <div>
      <h1 className=" text-5xl px-3 py-3 " >{num}</h1>
      <div id="btn-div" className="flex gap-3 justify-center items-center w-full h-screen  ">
      <button className="p-3 bg-blue-400" onClick={increase}>Click to Increase</button>
      <button className="p-3 bg-blue-400 " onClick={decrease}>Click to Decrease</button>
      <button className="p-3 bg-blue-400 " onClick={reset}>Click to Reset</button>

      </div>
      
    </div>
  )
}
export default App




<!--  form handling -->


const App = () => {
  const submitHandler = (e)=>{
      e.preventDefault()
  } 
  return (
    <div className=' p-3 flex justify-center items-center gap-3 h-screen'>
      <form  onSubmit={(e)=>{
          submitHandler(e)
      }}>
        <input type="text" placeholder='enter name ' value="kazi" />
      </form>
      <button className=' bg-blue-400 rounded-md p-2 mt-2'>submit</button>
    </div>
  )
}

export default App


<!-- two way binding approach for form handling,and created new array  and showing array of objects data in a div-->

import { useState } from "react" 

const App = () => {
  const [name, setname] = useState("")
  const [position , setposition] = useState("")
  const [allUsers , setallUsers] = useState([{name:"kazi", position:"developer"},{name:"mohib", position:"coder"} , {name:"honey singh", position:"singer"}])
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(name)
    
    const newArr =[...allUsers,{name , position}]
    setallUsers(newArr)
    setname("")
    setposition("")
    console.log(newArr)
  }
  return (
    <div>
        <form onSubmit={handleSubmit}
           className=' w-[50%] h-[50%] bg-cyan-300 p-3 gap-3 flex flex-col' >
          <input 
          value={name}
          onChange={(e)=>{setname(e.target.value)}}
          type="text" name="" id=""  placeholder='enter your name'/>

          <input 
          value={position}
          onChange={(e)=>setposition(e.target.value)}
          type="text" placeholder="enter position " />
          
          <input type="submit"  className='bg-green-500 text-white'/>
        </form>
       
        <div id="show" className=" bg-blue-300 w-full h-auto">
            {allUsers.map((item,index)=>{
                return (
                  <>
                  <div id="div" className=" flex justify-between p-2">
                  <h1 key={index}>{item.name}</h1>
                  <h2>{item.position}</h2>
                  </div>
                
                  </> 
                )
            })}
            
        </div>
    </div>
  )
}

export default App
