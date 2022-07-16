import Axios from "axios";

import { API_URL_MTBI } from "./settings";

export default function questions() {
    return new Promise((resolve, reject) => {
        Axios.get(API_URL_MTBI).then(res => {
            resolve(res.data)
        }).catch(err => {
                reject(err)
            })
        })
    }