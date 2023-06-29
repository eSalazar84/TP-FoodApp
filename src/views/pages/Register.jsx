import { useState, useEffect, useRef } from "react";
import  HeaderLogin from "../components/HeaderLogin.jsx"
import  Footer from "../components/Footer.jsx";


const users_url = "https://647a6c7ed2e5b6101db05858.mockapi.io/users";

function Register() {

    const [users, setUsers] = useState({
        name: "",
        mail: "",
        phone: "",
        password: ""
    });

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
            <HeaderLogin />
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
            <Footer />
        </>
    );
}

export default Register;