import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Us() {
    return (
        <>
            <Header/>
            <main>
                <h1>¿Quienes somos?</h1>
                <p>Somos un grupo de emprendedores que busca crear una comunidad interesada en resolver sus necesidades
                    de comidas, nacimos en 2022, en una pequeña ciudad de buenos aires
                </p>
                <h2>Nuestra misión</h2>
                <p>Lo que buscamos con la app es que haya una plataforma en común para que clientes y casas de comida,
                    puedan comprar y vender sus productos, con una interfaz limpia para que cada interesado sepa,
                    en forma rápida, dónde buscar lo que necesita.</p>
            </main>
            <Footer />

        </>
    )
}

export default Us;