import axios from "axios";

//Elimina un cuestionario
export default function EliminarCuestionario(idCuestionario){
    return new Promise((resolve, reject) => {
        axios.delete(`${API_URL_MTBI}/cuestionario/${idCuestionario}`).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}