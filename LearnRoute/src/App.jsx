import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import About from './pages/About'


const App = () => {
  return (
    <div>
    <Nav/>

    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contacts' element={<Contact/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
    </div>
  )
}

export default App