import { Link } from "react-router-dom";

function HeaderLogin() {
    return (
        <>
            <header>
                <nav>
                    <p><Link to={"/"}>Volver</Link></p>
                    <h1><Link to={"/"}>Food App</Link> </h1>
                </nav>
            </header>
        </>
    )
}

export default HeaderLogin