import './styles/App.css';
import Header from './views/Header.jsx';
import Main from './views/Main.jsx';
import Footer from './views/Footer.jsx';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
