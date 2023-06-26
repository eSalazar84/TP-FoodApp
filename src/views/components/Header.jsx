import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <header >
                <nav className="header-format"> 
                    <h1><Link to={"/Index.jsx"}>Food App</Link> </h1>
                    <div>
                        <ul>
                            <li><button> <Link to={"/Login.jsx"} >Acceder</Link> </button></li>
                            <li><button>Registra tu negocio</button></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header