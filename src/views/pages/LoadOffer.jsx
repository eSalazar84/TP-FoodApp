import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Footer from "../components/Footer";
import Header from "../components/Header";

const menu_url = "https://647a6c7ed2e5b6101db05858.mockapi.io/menu/";

function LoadOffer() {

    const { user } = useContext(UserContext);

    const [menu, setMenu] = useState({
        foto: "",
        nombre: "",
        precio: ""
    })

    const addOne = (menu) => {
        fetch(menu_url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(menu),
        })
            .then(res => res.json())
            .then(menu => {
                setMenu(menu);
                window.location = "/"
            })
            .catch(err => console.error(err));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addOne(menu);
    }

    function handleChange(e) {
        setMenu((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <>
            <Header />
            <h3 className="carga-oferta">Carga tu oferta acá</h3>
            <main>
                {user ? (
                    <form id="oferta" onSubmit={handleSubmit}>
                        <label htmlFor="foto">
                            Foto descriptiva de lo que queres publicar (copia y pega una ruta de internet):
                            <input type="text" id="foto" name="foto" required
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="nombre">
                            Titulo:
                            <input type="text" id="nombre" name="nombre" required
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="precio">
                            Precio:
                            <input type="number" id="precio" name="precio" required
                                onChange={handleChange}
                            />
                        </label>
                        <div>
                            <button type="submit">Subir Oferta</button>
                            <button className="button-offer">
                                <Link to={"/"}>Volver a la página principal</Link>
                            </button>
                        </div>
                    </form>
                ) : (
                    <form id="registroNuevoUsuario" onSubmit={handleSubmit}>
                        <label htmlFor="foto">
                            Foto descriptiva de lo que queres publicar (copia y pega una ruta de internet):
                            <input type="text" id="foto" name="foto" required
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="nombre">
                            Titulo:
                            <input type="text" id="nombre" name="nombre" required
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="precio">
                            Precio:
                            <input type="number" id="precio" name="precio" required
                                onChange={handleChange}
                            />
                        </label>
                        <div>
                            <button type="submit">Subir Oferta</button>
                            <button><Link to={"/"} >Volver a la pagina principal</Link> </button>
                        </div>
                    </form>
                )}
            </main>
            <Footer />
        </>
    )
}

export default LoadOffer