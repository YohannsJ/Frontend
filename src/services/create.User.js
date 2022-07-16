import { API_URL } from "./settings";
import Axios from 'axios';

export default function Register(body) {

    return new Promise((resolve, reject) => {
        Axios.post(`${API_URL}/user/`, body).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    }
)}