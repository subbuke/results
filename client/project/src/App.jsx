import {Routes, Route} from "react-router-dom"
import './App.css'
import Home from './Home'
import CollegePortal from "./College/CollegePortal"
import StudentsPortal from "./Students/StudentsPortal"
import CreateMarksheet from "./College/CreateMarksheet"
import DeleteMarksheet from "./College/DeleteMarksheet"
import EditMarksheet from "./College/EditMarksheet"

function App() {

  return (
    <>
    <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/college" element={<CollegePortal />}/>
   <Route path="/students" element={<StudentsPortal />}/>
   <Route path="/college/create" element={<CreateMarksheet />}/>
   <Route path="/college/delete" element={<DeleteMarksheet />}/>
   <Route path="/college/edit" element={<EditMarksheet />}/>
    </Routes>
    </>
  )
}

export default App
