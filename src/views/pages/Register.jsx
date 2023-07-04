import { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../../UserContext.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const users_url = "https://647a6c7ed2e5b6101db05858.mockapi.io/users/";

function Register() {

    const { user } = useContext(UserContext);

    const { handleLogOut } = useContext(UserContext);

    const [users, setUsers] = useState({
        id: "",
        mail: "",
        name: "",
        password: "",
        phone: ""
    });

    const [message, setMessage] = useState("");

    const notificacionRef = useRef("");

    function handleChange(e) {
        setUsers((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    function handleAddSubmit(e) {
        e.preventDefault();
        console.log(users);
        /* addOne(users);
        window.location = "/";
        e.target.reset(); */
    }

    function handleEditSubmit(e) {
        e.preventDefault();
        updateOne(users.id, users);
        window.location = "/";
        e.target.reset();
    }

    function addOne(adduser) {
        fetch(users_url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(adduser),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data)
            })
            .catch(err => console.error(err));
    }

    function updateOne(id, updateUser) {
        fetch(`${users_url}${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateUser),
        })
            .then((res) => res.json())
            .catch((err) => console.error(err));
    }

    function updateUser() {
        updateOne(users.id, users);
    }

    function deleteOne(users) {
        fetch(`${users_url}${users.id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }

    function deleteUser(users) {
        deleteOne(users);
        window.location = "/"
    }

    return (
        <>
            <Header />
            <main>
                {user ? (
                    <div>
                        <h3>Formulario de Registro</h3>
                        <form id="registroNuevoUsuario" onSubmit={handleEditSubmit}>
                            <label htmlFor="name">
                                Nombre:
                                <input type="text" id="name" name="name" required defaultValue={user.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="mail">
                                Email:
                                <input type="email" id="mail" name="mail" required defaultValue={user.mail}
                                    onChange={handleChange}
                                />
                                <span>{message && <p>message</p>}</span>
                            </label>
                            <label htmlFor="phone">
                                Telefono:
                                <input type="tel" id="phone" name="phone" required defaultValue={user.phone}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="password">
                                Contraseña:
                                <input type="password" id="password" name="password" required defaultValue={user.password}
                                    onChange={handleChange}
                                />
                            </label>
                            <div>
                                <button type="submit" onClick={updateUser} >Actualizar Datos</button>
                                <button onClick={deleteUser} >Eliminar Usuario</button>
                                <button><Link to={"/"} >Volver a la pagina principal</Link> </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>

                        <h3>Formulario de Registro</h3>
                        <form id="registroNuevoUsuario" onSubmit={handleAddSubmit}>
                            <label htmlFor="name">
                                Nombre:
                                <input type="text" id="name" name="name" required
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="mail">
                                Email:
                                <input type="email" id="mail" name="mail" required
                                    onChange={handleChange}
                                />
                                <span id="notificacion" ref={notificacionRef}></span>
                            </label>
                            <label htmlFor="phone">
                                Telefono:
                                <input type="tel" id="phone" name="phone" required
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="password">
                                Contraseña:
                                <input type="text" id="password" name="password" required
                                    onChange={handleChange}
                                />
                            </label>
                            <div>
                                <button type="submit">Registrarse</button>
                                <button><Link to={"/"} >Volver a la pagina principal</Link> </button>
                            </div>
                        </form>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default Register;