import './styles/App.css';
import Login from "./views/pages/Login.jsx"
import Index from './views/pages/Index.jsx';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './views/pages/Register.jsx';



function App() {

  return (
    <>
    <Routes>
      <Route exact path='/Index.jsx' element={<Index/>} />
      <Route exact path='/Login.jsx' element={<Login/>} />
      <Route exact path='/Register.jsx' element={<Register/>} />
      <Route exact path='/' element={<Index/>} />
    </Routes>
    </>
  )
}

export default App
