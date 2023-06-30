import { useState, useEffect, useRef,useContext } from "react";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

import { UserContext } from "../../UserContext.jsx";

const users_url = "https://647a6c7ed2e5b6101db05858.mockapi.io/users";

function Register() {

    const { user } = useContext(UserContext);
    console.log(user);

    const [users, setUsers] = useState({
        name: "",
        mail: "",
        phone: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const notificacionRef = useRef("");

    function handleChange(e) {
        setUsers((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addOne(users);
        window.location = "/";
        e.target.reset();
    }

    function addOne(users) {
        fetch(users_url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(users),
        })
            .then(res => res.json())
            .then(user => {
                console.log(user);
                setUsers(user)
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <Header />
            <main>
                {user ? (
                    <div>
                        <h3>Formulario de Registro</h3>
                        <form id="registroNuevoUsuario" onSubmit={handleSubmit}>
                            <label htmlFor="name">
                                Nombre:
                                <input type="text" id="name" name="name" required placeholder={user.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="mail">
                                Email:
                                <input type="email" id="mail" name="mail" required placeholder={user.mail}
                                    onChange={handleChange}
                                />
                                <span>{message && <p>message</p>}</span>
                            </label>
                            <label htmlFor="phone">
                                Telefono:
                                <input type="tel" id="phone" name="phone" required aria-required="true" placeholder={user.phone}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="password">
                                Contraseña:
                                <input type="password" id="password" name="password" required aria-required="true" value={user.password}
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <button type="submit">Actualizar Datos</button>
                        </form>
                    </div>
                ) : (
                    <div>

                        <h3>Formulario de Registro</h3>
                        <form id="registroNuevoUsuario" onSubmit={handleSubmit}>
                            <label htmlFor="name">
                                Nombre:
                                <input type="text" id="name" name="name" required aria-required="true"
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="mail">
                                Email:
                                <input type="email" id="mail" name="mail" required aria-required="true"
                                    onChange={handleChange}
                                />
                                <span id="notificacion" ref={notificacionRef}></span>
                            </label>
                            <label htmlFor="phone">
                                Telefono:
                                <input type="tel" id="phone" name="phone" required aria-required="true"
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="password">
                                Contraseña:
                                <input type="text" id="password" name="password" required aria-required="true"
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <button type="submit">Registrarse</button>
                        </form>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default Register;