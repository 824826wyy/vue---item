//这个文件是对axios进行二次封装的文件
//我们封装完之后，axios就会比不封装的功能多
import axios from 'axios'

//用来做进度条信息的
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

//配置基础路径和超市限制
const instance = axios.create({
    baseURL:'/mock',    //基础路径
    timeout:20000       //超时限制
})

//添加进度条信息
instance.interceptors.request.use((config) =>{
    Nprogress.start()
    return config
})
instance.interceptors.response.use(
    (response) => {
        Nprogress.done()
        return response.data
    },
    (error) => {
        Nprogress.done()
        alert('请求失败' + error.message || '未知错误')
        
        // 中断promiss链
        return new Promise(() => {})
    }
)

export default instance