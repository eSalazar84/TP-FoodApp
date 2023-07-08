import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Swal from "sweetalert2";

const users_url = "https://647a6c7ed2e5b6101db05858.mockapi.io/users/";

function UserList() {

    const { user } = useContext(UserContext)

    


    return (
        <>
            <Header />
            <h1>Ves que llegue?</h1>
            <Footer />
        </>

    )
}

export default UserList
