import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://vueapp-ad652-default-rtdb.firebaseio.com/'
//axios.defaults.headers.common['Authorization'] = '123'
//axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue){
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://vueapp-ad652-default-rtdb.firebaseio.com/',
            headers: {
                "Authorization": "abc123"
            //    get: {
            //         "Authorization": "abc123"
            //    }
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            // if(config.method == 'post'){
            //     config.method = 'put'
            // }
            return config
        })
        // Vue.prototype.$http.interceptors.response.use(res => {
        //     const list = []
        //     for(let k in res.data){
        //         //name: res.data[key].name,
        //         //eamil: res.data[key].email
        //         list.push({id: k, ...res.data[k]})
        //     }
        //     res.data = list
        //    return res
        // }, error => Promise.reject(error))
    }
})