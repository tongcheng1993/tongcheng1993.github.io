import axios from 'axios'
import {message} from 'ant-design-vue'

let baseURL = process.env.VUE_APP_API_URL
const axios1 = axios.create({
    baseURL: baseURL,
    timeout: 2 * 60 * 60 * 1000
})
axios1.interceptors.request.use((request) => {
    return request;
}, (error) => {
    return Promise.reject(error);
})


axios1.interceptors.response.use((response) => {
   console.log(response.status)

    return response

}, (error) => {
    if (error.response.status === 404) {
        error.message = '未找到对应服务'
    } else {
        error.message = '连接出错'
    }
    message.info(error.message,3,function () {
        console.log("message")
    })
    return Promise.reject(error);
})


export function get(url, param) {
    return axios1({
        url: url,
        method: "get",
        params: param
    })
}
