import React from "react";

function Offers({menus}){

    return (
        <>
        {
            menus.map((menu,index)=>(
                <div key={index}>
                    <div><img src={menu.foto} alt="foto-comida" /></div>
                    <h5>Menú: {menu.menu}</h5>
                    <p>Precio: {menu.precio}</p>
                </div>
            ))
        }
        </>
    )
}

export default Offers