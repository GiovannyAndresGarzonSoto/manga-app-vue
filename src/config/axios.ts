import axios from 'axios'

const instance = axios.create({
    // baseURL: 'https://manga-app-express-mongo-production.up.railway.app/api',
    // baseURL: 'https://3088-200-83-84-50.ngrok-free.app/api'
    baseURL: 'http://localhost:3666/api'
    // baseURL: 'https://manga-api-node.onrender.com/api'
})

export default instance