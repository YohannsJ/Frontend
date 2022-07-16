import React from "react"
import Axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../../services/settings";
function ShowAllUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Axios.get(`${API_URL}/user`)
            .then(res => {
                // setAPIresponse(res.data);
                for(let i in res.data){
                    setUsers(prevUsers => [...prevUsers, res.data[i]]);
                }})  
            .catch(err => console.log(err));
        }, []);

    const listUsers = users.map((user) =>
        <div className="BoxUser">
            <h1>----</h1>
            <h2>Nombre: {user.nombre}</h2>
            <h2>Rut: {user.rut}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Sexo:{user.sex}</h2>
            <h2>Password:{user.pass}</h2>

        </div>
    );
    // console.log(users);
    return (
        <div>
            <div>
                <h1>Todos los usuarios</h1>
            </div>
            <div>
            {listUsers}
            </div>
        </div>
    )
}




function SearchUser() {
    return (
        <div>
            <h1>Buscar usuario</h1>
        </div>
    )
}


export default ShowAllUsers;