import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";


function Header() {
    const { user, handleLogout } = useContext(UserContext);
    return (
        <>
            <header >
                <nav className="header-format">
                    <Link to={"/"} ><img src="./src/assets/Food App.svg" /></Link>
                    {
                        user ? (
                            <div>
                                <ul>
                                    <li className="welcome-message">Bienvenid@, {user.name}</li>
                                    <li><Link to={"/Register.jsx"}><button className="btn1">Modificar datos</button></Link></li >
                                    <li><button className="btn2" onClick={handleLogout}>Cerrar sesion</button></li>
                                </ul >
                            </div >

                        ) : (
                            <div>
                                <ul>
                                    <li><Link to={"/Login.jsx"}><button className="btn1">Acceder</button></Link></li >
                                    <li><Link to={"/Register.jsx"} ><button className="btn2">Registra tu negocio</button></Link></li>
                                </ul >
                            </div >
                        )
                    }
                </nav >
            </header >
        </>
    )
}

export default Header