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


                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login