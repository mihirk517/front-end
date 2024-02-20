
import axios from "axios"

axios.defaults.baseURL = 'http://localhost:5032'
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')