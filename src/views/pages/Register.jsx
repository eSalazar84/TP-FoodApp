import { useState, useContext } from "react";
import { UserContext } from "../../UserContext.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const users_url = "https://647a6c7ed2e5b6101db05858.mockapi.io/users/";

function Register() {

    const { user } = useContext(UserContext);

    const { handleLogout } = useContext(UserContext);

    const [users, setUsers] = useState({
        name: "",
        mail: "",
        phone: "",
        password: ""
    });

    //-------------- Agregar un nuevo User -------------------//

    const addOne = (addUser) => {
        fetch(users_url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addUser)
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setUsers(data)
                window.location = "/";
            })
            .catch(err => console.error(err))
    }

    const handleAddSubmit = (e) => {
        e.preventDefault();
        addOne(users);
    }

    function handleChange(e) {
        setUsers((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    //-------------- Editar un User existente -------------------//

    const [editUsers, setEditUsers] = useState({
        name: "",
        mail: "",
        phone: "",
        password: ""
    });

    const editOne = (id, updateUser) => {
        fetch(users_url + `${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateUser)
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setEditUsers(data);
                window.location = "/";
                handleLogout();
            })
            .catch(err => console.error(err))
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        editOne(user.id, editUsers);
    }

    function handleEditChange(e) {
        e.preventDefault();
        console.log(editUsers);
        setEditUsers(((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })));
    }

    //-------------- Eliminar un User del registro -------------------//

    const deleteOne = (user) => {
        fetch(users_url + `${user.id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                window.location = "/";
                handleLogout();
            })
    }

    function deleteUser(e) {
        e.preventDefault();
        deleteOne(user);
    }

    return (
        <>
            <Header />
            <main>
                {user ? (
                    <div>
                        <h3>Formulario de Registro</h3>
                        <p>Por favor, complete todos los campos antes de editar sus datos.</p>
                        <form id="registroNuevoUsuario" onSubmit={handleEditSubmit}>
                            <label htmlFor="name">
                                Nombre:
                                <input type="text" id="name" name="name" required defaultValue={user.name}
                                    onChange={handleEditChange}
                                />
                            </label>
                            <label htmlFor="mail">
                                Email:
                                <input type="email" id="mail" name="mail" required defaultValue={user.mail}
                                    onChange={handleEditChange}
                                />
                            </label>
                            <label htmlFor="phone">
                                Telefono:
                                <input type="tel" id="phone" name="phone" required defaultValue={user.phone}
                                    onChange={handleEditChange}
                                />
                            </label>
                            <label htmlFor="password">
                                Contraseña:
                                <input type="password" id="password" name="password" required defaultValue={user.password}
                                    onChange={handleEditChange}
                                />
                            </label>
                            <div>
                                <button type="submit">Actualizar Datos</button>
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