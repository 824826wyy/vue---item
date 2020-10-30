import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//先把原来的函数保存一份
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
//修改路由器原型当中的push为我们自己定义的Push
//而我们自己定义的push并没有原来push的功能，我们最终还是使用原来的push功能
//我们只是在原来的基础上加了一个判断
VueRouter.prototype.push = function(location,resolved,rejected){
    if(resolved === undefined && rejected === undefined){
       return originPush.call(this,location).catch(() =>{}) 
    }else{
        return originPush.call(this,location,resolved,rejected)
    } 
}
VueRouter.prototype.replace = function(location,resolved,rejected){
    if(resolved === undefined && rejected === undefined){
       return originReplace.call(this,location).catch(() =>{}) 
    }else{
        return originReplace.call(this,location,resolved,rejected)
    } 
}

import routes from './routes'

export default new VueRouter({
    mode:'history',
    routes
})