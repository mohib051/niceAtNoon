import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const App = () => {
    const oggyRef = useRef(null)
    const [xval, setxval] = useState(0)
    const [yval, setyval] = useState(0)
      const [rotate, setrotate] = useState(0)
    const handleClick = ()=>{
      console.log(oggyRef.current)
      setxval(Math.random()*100)
      setyval(Math.random()*90)
      setrotate(Math.random()*360)
    }
    console.log(xval)
    console.log(yval)
   
    useEffect(() => { 
      oggyRef.current.style.left = xval + "%"
      oggyRef.current.style.top = yval +"%"
      oggyRef.current.style.rotate = rotate + "deg"
    },[xval])
    
 
    return (
        
    <div>
        <img ref={oggyRef} src="https://i.pinimg.com/474x/49/4d/2e/494d2e25fad7412b4f11beb7242ba804.jpg" alt="" />

        <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default App