import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Link } from "react-router-dom";

function Login() {

    const BASE_URL = "https://647a6c7ed2e5b6101db05858.mockapi.io/users";



    function addOne(user) {
        fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(user => {
                addOne(user);
            })
            .catch(err => console.error(err));
    }


    function handleSubmit(e) {
        e.preventDefault();

        const checkPass = {
            mail: e.target.email.value,
            password: e.target.password.value
        }

        console.log(checkPass);


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
                <div>
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="email">Correo
                            <input type="email" name="email" id="email" required />
                        </label>
                        <label htmlFor="password">Contraseña
                            <input type="password" name="password" id="password" required />
                        </label>
                        <input type="submit" value="Ingresar" />
                    </form>

                    <form >
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Verificado</label>
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