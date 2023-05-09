import './App.css'
import Nav from './components/Nav'
import { Routes, Route, } from 'react-router-dom'
import GetTeach from './components/GetTeachers'
import GetStud from './components/GetStudents'
import CreateTeach from './components/PostTeacher'
import Home from './components/Home'
import CreateStud from './components/PostStudent'


function App() {
  
  return (
    <>
        <Nav />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/teacher" element={<GetTeach/>} />
          <Route path="/add/teacher" element={<CreateTeach/>} />
          <Route path="/student" element={<GetStud/>} />
          <Route path="/add/student" element={<CreateStud/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
