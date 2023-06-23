import React from "react";
import { Link } from "react-router-dom";
import Index from "../Index.jsx";

function Header() {
    return (
        <>
            <header>
                <nav>
                    <h1><Link to={"/Index.jsx"}>Food App</Link> </h1>
                    <div>
                        <li><button> <Link to={"/Login.jsx"} >Acceder</Link> </button></li>
                        <li><button>Registra tu negocio</button></li>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header