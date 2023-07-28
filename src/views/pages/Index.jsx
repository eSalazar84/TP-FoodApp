import { useContext, useEffect, useState } from 'react';
import { UserContext } from "../../UserContext.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import UserSearch from "../components/SearchMenu.jsx";

const menu_url = "https://647a6c7ed2e5b6101db05858.mockapi.io/menu"

function Index() {

    const { user } = useContext(UserContext)

    const [menu, setMenu] = useState([]);
    const [show, setShow] = useState(false);

    const fetchMenus = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMenu(data);
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchMenus(menu_url)
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
                <div className="description">
                    <section className="section-position">
                        <h3>¡Pedi lo que quieras!</h3>
                        <p>Minutas, comidas gourmet, postres y mucho más.</p>
                    </section>
                    <section className="button-position">
                        {user ? (
                            <div>
                                <Link to={"/LoadOffer.jsx"}><button className="publicar">Publica tu Oferta</button></Link>
                                <button className="ver" onClick={handleClick}>{message}</button>
                            </div>
                        ) : (
                            <div>
                                <Link to={"/Login.jsx"}><button className="publicar">Publica tu Oferta</button></Link>
                                <button className="ver" onClick={handleClick}>{message}</button>
                                <section className="reputation">
                                    <h3>¡Mira nuestra reputación!</h3>
                                    <p>4.9 (1.3k de opiniones)</p>
                                </section>
                            </div>

                        )}
                    </section>
                </div>
                <aside className="photo-container">
                    <img src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="photo-sandwich" className="image img-1" />
                    <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="photo-burguer" className="image img-2" />
                </aside>
            </main>
            <div className={containerClassName}>
                <section className='card-container'>
                    <UserSearch  />
                    {/* <Menus menus={menu} /> */}
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Index;
