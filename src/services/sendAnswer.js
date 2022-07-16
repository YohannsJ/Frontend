import { API_URL_MTBI } from "./settings";
import Axios from "axios";

export default function SendAnswer(){
    return new Promise((resolve, reject) => {
        Axios.post(`${API_URL_MTBI}/answer/`, body).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}