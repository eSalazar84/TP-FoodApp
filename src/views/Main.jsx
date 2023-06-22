import Menus from "./components/Menus.jsx"
// importarlos -useEffect -useState
import { useEffect, useState } from 'react';

function Main() {
    const [menus, setMenu] = useState([]);

    const [show, setShow] = useState(true);

    const initialUrl = "https://647a6c7ed2e5b6101db05858.mockapi.io/menu"
    const fetchUsers = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMenu(data);
            })
            .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchUsers(initialUrl);
    }, []);

    const message = show ? "Ocultar Ofertas" : "Ver Ofertas";

    const containerClassName = show ? 'show' : 'hide';

    const handleClick = () => {
        setShow(!show)
    }


    return (
        <>
        <main>
                <section>
                    <h3>¡Pedi lo que quieras!</h3>
                    <p>Minutas, comidas gourmet, postres y mucho más.</p>
                    <div>
                        <button>Publica tu Oferta</button>
                        <button onClick={handleClick} >{message}</button>
                    </div>
                    <p>Mira nuestra reputacion!</p>
                </section>
            </main>
            <aside></aside>

            <div className={containerClassName}>
                <section className='card-container'>
                    <Menus menus={menus} />
                </section>
            </div>
        </>
    )
}

export default Main