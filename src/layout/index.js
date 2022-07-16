import GetUser from "../services/getUser";
import { useEffect, useState } from "react";

export default function IndexLayout() {
    const [jwt, setJwt] = useState('');
    const [user, setUser] = useState({});
    const [Loged, setLoged] = useState(false);
    useEffect(() => {
        setJwt(sessionStorage.getItem('jwt'));
        console.log(jwt);
        handleUser()

    }, [jwt]);

    const handleData = () => {
        if (Loged) {
            return <div>
                <h1>Bienvenid@ {user.name}</h1>
                <h2>{user.email}</h2>
            </div>
        }
        else {
            return <div>
                <h1>No estas logueado</h1>
            </div>
        }
    }

    const handleUser = async () => {
        GetUser(jwt).then(res => {  //Devuelve una promesa
            console.log("dataGetUSerindex", res)
            setLoged(true);
            setUser(res)
        }).catch(err => {
            console.log(err);
            setLoged(false);
        })
    }
    const handleHeader = () => {
        return (
            <div className="container-fluid p-5 bg-dark text-white text-center">
                <h1>Proyecto Minerva</h1>
                <p>Creado por:</p>
                <h5>Benjamin Pino , Yohanns Jara, Emiliano jofre</h5>
            </div>
        )
    }

    return (
        <div>
            {handleHeader()}
            {handleData()}
        </div>
    )
}

