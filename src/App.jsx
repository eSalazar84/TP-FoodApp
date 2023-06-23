import './styles/App.css';
import Login from "./views/Login.jsx"
import Index from './views/Index.jsx';
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
      <Route exact path='/Index.jsx' element={<Index/>} />
      <Route exact path='/Login.jsx' element={<Login/>} />
      <Route exact path='/' element={<Index/>} />
      <Route exact path='/' element={<Index/>} />
    </Routes>
    </>
  )
}

export default App
