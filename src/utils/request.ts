import axios from 'axios'

const request = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // 所有接口地址中相同的部分
})

export default request