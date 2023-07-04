import { React, useContext, useEffect, useState } from "react"
import { UserContext } from "../../UserContext"
import { Link } from "react-router-dom";

const menu_url = "https://647a6c7ed2e5b6101db05858.mockapi.io/menu/";

const blankUser = {
    createdAt: "",
    nombre: "",
    precio: "",
    foto: "",
    id: ""
}

function Menus({ menus }) {

    const { user } = useContext(UserContext);

    const [currentUser, setCurrentUser] = useState(blankUser);

    const deleteOne = (menu) => {
        fetch(`${menu_url}${menu.id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(data => {
                setCurrentUser(data);
                window.location.reload()
            })
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        fetch(menu_url)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
            })
            .catch((err) => console.error(err));
    }, [])

    return (
        <>
            {user ? (
                menus.map((menu, index) => (
                    <div className="card" key={index}>
                        <img src={menu.foto} className="card-img-top" alt="photo-menu" />
                        <div className="card-body">
                            <h5 className="card-title">{menu.nombre}</h5>
                            <p className="card-text">${menu.precio} </p>
                            <a href="#" className="btn btn-primary">Ir a algún lugar</a>
                            <Link to={"/LoadOffer.jsx"} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg></Link>
                            <Link onClick={() => deleteOne(menu)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg></Link>

                        </div>
                    </div>
                ))

            ) : (
                menus.map((menu, index) => (
                    <div className="card" key={index}>
                        <img src={menu.foto} className="card-img-top" alt="photo-menu" />
                        <div className="card-body">
                            <h5 className="card-title">{menu.nombre}</h5>
                            <p className="card-text">${menu.precio} </p>
                            <a href="#" className="btn btn-primary">Ir a algún lugar</a>
                        </div>
                    </div>
                ))
            )
            }
        </>
    )
}

export default Menus
