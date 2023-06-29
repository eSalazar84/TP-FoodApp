import Footer from "../components/Footer.jsx";
import HeaderLogin from "../components/HeaderLogin.jsx"
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';


const users_url = "https://647a6c7ed2e5b6101db05858.mockapi.io/users";

function Login() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(users_url)
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
            setUsers(logUser);
            window.location = "/LoadOffer.jsx";
        } else {
            notificacionRef.current.style.color = 'red';

        }

        e.target.reset();
    }

    return (
        <>
            <HeaderLogin />
            <main>
                <h2>Registrate o ingresá para continuar</h2>
                <div className='form-box'>
                    <form onSubmit={handleSubmit} className='form-box-style'>
                        <div className="mb-3">
                            <label htmlFor="mail" className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" id="mail" name='mail' aria-describedby="emailHelp" required/>
                            <div id="emailHelp" className="form-text">No compartiremos sus datos con nadie.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password" name="password" required/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Recordar mi contraseña</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                        <p id="notificacion" ref={notificacionRef}> </p>
                        <p>Sos nuevo en el sitio? <Link to={"/Register.jsx"} >Registrate acá.</Link> </p>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login