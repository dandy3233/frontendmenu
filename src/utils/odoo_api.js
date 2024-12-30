import axios from 'axios'


const odooInstance = axios.create({
    baseURL: 'http://localhost:8069',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        
    },
    withCredentials: true,
})

export default odooInstance