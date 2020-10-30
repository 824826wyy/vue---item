import {requCategoryList} from '@/api';

const state = {
    categoryList:[]
}
const mutations = {
    RECEIVECATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
}
const actions = {
    async getcategoryList(context){
        const result = await requCategoryList()
        if(result.code === 200){
            context.commit('RECEIVECATEGORYLIST',result.data)
        }
    }
}
const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}