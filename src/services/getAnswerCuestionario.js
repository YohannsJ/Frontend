import axios from "axios";
import { API_URL_MTBI } from "./settings";

export default function GetAnswer(body){
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL_MTBI}/answer/`, body).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
