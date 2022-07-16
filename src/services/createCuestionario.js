import axios from "axios";
import { API_URL_MTBI } from "./settings";

//No probado aún
export default function CreateCuestionario(){
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL_MTBI}/cuestionario/`, body).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}