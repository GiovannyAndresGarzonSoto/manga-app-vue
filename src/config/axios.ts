import axios from 'axios'

const instance = axios.create({
    // baseURL: 'https://manga-app-express-mongo-production.up.railway.app/api',
    // baseURL: 'https://3088-200-83-84-50.ngrok-free.app/api'
    baseURL: 'http://143.198.60.56:3665/api'
})

export default instance