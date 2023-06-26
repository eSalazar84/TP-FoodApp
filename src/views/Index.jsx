import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Menus from "./components/Menus.jsx"
// importarlos -useEffect -useState
import { useEffect, useState } from 'react';

function Index() {

    const [menu, setMenu] = useState([]);

    const [show, setShow] = useState(false);

    const BASE_URL = "https://647a6c7ed2e5b6101db05858.mockapi.io/menu"


    const fetchMenus = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMenu(data);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchMenus(BASE_URL)
    }, []);

    const message = show ? "Ocultar Ofertas" : "Ver Ofertas";

    const containerClassName = show ? 'show' : 'hide';

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <>
            <Header />
            <main>
                <section className="section-position">
                    <h3>¡Pedi lo que quieras!</h3>
                    <p>Minutas, comidas gourmet, postres y mucho más.</p>
                    <div>
                        <ul>
                            <li><button>Publica tu Oferta</button></li>
                            <li><button onClick={handleClick} >{message}</button></li>
                        </ul>
                    </div>
                    <p>Mira nuestra reputacion!</p>
                </section>
            
            <aside className="photo-container">
                <img src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="photo-sandwich" className="image img-1" />
                <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="photo-burguer" className="image img-2" />
            </aside>

            </main>
            <div className={containerClassName}>
                <section className='card-container'>
                    <Menus menus={menu} />
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Index