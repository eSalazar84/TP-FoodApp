import '../styles/App.css';
import Footer from "./components/Footer.jsx";
import { Link} from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
const BASE_URL = "https://647a6c7ed2e5b6101db05858.mockapi.io/users";



function Login() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data);
            })
            .catch(err => console.error(err))
    }, [])

    const notificacionRef = useRef("");

    function handleSubmit(e) {
        e.preventDefault();

        const logUser = {
            mail: e.target.mail.value,
            password: e.target.password.value
        }
        console.log(logUser);

        const checkPass = users.find(user => user.mail === logUser.mail && user.password === logUser.password)

        if (checkPass) {
            notificacionRef.current.style.color = 'green';
            notificacionRef.current.innerHTML = "Bienvenido!";
        } else {
            notificacionRef.current.style.color = 'red';
            notificacionRef.current.innerHTML = "Credenciales Incorrectas";
        }

        e.target.reset()
    }

    return (
        <>
            <header>
                <nav>
                    <a><Link to={"/Index.jsx"}>Volver</Link> </a>
                    <h1><Link to={"/Index.jsx"}>Food App</Link> </h1>
                </nav>
            </header>
            <main>
                <h2>Registrate o ingresá para continuar</h2>
                {/* <div className='form-box' >
                    <form onSubmit={handleSubmit} className='form-box-style'>
                        <label htmlFor="mail">Correo</label>
                        <input type="email" name="mail" id="mail" required />
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" required />
                        <input type="submit" value="Ingresar" className='btnSubmit' />
                        <p id="notificacion" ref={notificacionRef}> </p>
                    </form>
                </div> */}
                <div className='form-box'>
                    <form onSubmit={handleSubmit} className='form-box-style'>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">No compartiremos sus datos con nadie.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password" name="password" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Recordar mi contraseña</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login