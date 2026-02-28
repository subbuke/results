import {Routes, Route} from "react-router-dom"
import './App.css'
import Home from './Home'
import CollegePortal from "./College/CollegePortal"
import StudentsPortal from "./Students/StudentsPortal"

function App() {

  return (
    <>
    <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/college" element={<CollegePortal />}/>
   <Route path="/students" element={<StudentsPortal />}/>
    </Routes>
    </>
  )
}

export default App
