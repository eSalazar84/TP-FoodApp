import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <header >
                <nav className="header-format"> 
                <img src="./src/assets/Food App.svg"/>
                    <div>
                        <ul>
                            <li><Link to={"/Login.jsx"}><button  className="btn1">Acceder </button></Link></li>
                            <li><button className="btn2">Registra tu negocio</button></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header