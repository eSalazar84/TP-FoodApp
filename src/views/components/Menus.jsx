import React from "react"

function Menus({ menus }) {

    return (
        <>
            {
                menus.map((menu, index) => (
                    <div className="card"  key={index}>
                        <img src={menu.foto} className="card-img-top" alt="photo-menu" />
                        <div className="card-body">
                            <h5 className="card-title">Menu: {menu.nombre}</h5>
                            <p className="card-text">Precio: ${menu.precio} </p>
                            <a href="#" className="btn btn-primary">Ir a algún lugar</a>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Menus
