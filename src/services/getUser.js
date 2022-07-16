import { API_URL } from "./settings";
import Axios from "axios";
export default function GetUSer(token) {
    if (token === ""|| token === undefined || token === null) {
        return new Promise((resolve,reject) =>{
            reject("No hay token, Sesion no iniciada")
        })}
    return new Promise((resolve, reject) => {
        Axios.get(`${API_URL}/user/${token}`)
            .then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            }
)})}