import { useState,useEffect } from "react"
import Swal from "sweetalert2";
import GetUSer from "../../services/getUser";

export default function User(){
    const [user,SetUser] = useState([]);
    
    GetUSer(sessionStorage.getItem('jwt')).then(res => {
        SetUser(res) 
    }).catch(err => {
        console.error(err)
        Swal.fire({
            icon: 'error',
            title: 'Oops... Algo salió mal',
            text: `Error al obtener los datos del usuario`,
        }).then(function () {
            window.location = "/";
        })
    })
    // console.log("user",user);
    const handleUser = () => {
        return (
            <div>

                <span>Nombre:              {user.nombre}</span>
                <br/>
                <span>Fecha de nacimiento: {user.nacimiento}</span>
                <br/>
                <span>Sexo:                {user.genero}</span>
                <br/>
                <span>Trabajo:             {user.profesion}</span>
                <br/>
                <span>email:               {user.email}</span>
                <br/>
                <span>Biografia:           {user.bio}</span>    
            </div>
        )
        }
    return(
        <>
        {handleUser()}
        </>
    )

}