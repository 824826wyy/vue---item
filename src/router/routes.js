import Home from '@/views/Home'
import Login from '@/views/Login' 
import Register from '@/views/Register' 
import Search from '@/views/Search' 

export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHidden:true
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHidden:true
        }
    },
    {
        path:'/search/:keyword?',
        component:Search,
        name:'search',
        props: (route)=>({keyword:route.params.keyword, keyword1:route.query.keyword1 })
    },
    {
        path:'/',
        redirect:'/home'
    }

]