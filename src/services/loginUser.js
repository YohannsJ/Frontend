import Axios from 'axios';
import { API_URL } from './settings';

export default function login(body) {
  return new Promise((resolve, reject) => {
    Axios.post(`${API_URL}/login`, body).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
})}